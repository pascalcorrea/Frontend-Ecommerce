import UserContext from "./UserContext";
import { useReducer } from "react";
import userReducers from "./userReducers";
import axiosClient from "../Config/axiosClient";
import { useNavigate } from "react-router-dom";



const UserProvider = ({children}) => {

  const navigate = useNavigate();

  const [userState, dispatch] = useReducer(userReducers, {
      infoUser: [],
      authStatus: false
  });

  //auth se pueda registrar, iniciar sesion y desconectar

  const registerUser = async(user) => {
      try {
        const newUser = await axiosClient.post("/user", user);
        if(newUser.data.success){
          // alert(newUser.data.message)
          dispatch({type: "REGISTER/LOGIN", payload: newUser.data})
          console.log(newUser.data)
        } 
        console.log(newUser.data.message)
      } catch (error) {
        dispatch({type: "LOGIN_ERROR"})
      }
    }
  
  const loginUser = async(user) => {
    try {
      const newUser = await axiosClient.post("/user/signin", user);
      if(newUser.data.success){
        // alert(newUser.data.message)
        dispatch({type: "REGISTER/LOGIN", payload: newUser.data})
        console.log(newUser.data)
        console.log(newUser.data.token)
      }
      console.log(newUser.data.message)
    } catch (error) {
      dispatch({type: "LOGIN_ERROR"})
    }
  }

  const signOut = async() => {
    dispatch({ type: "SIGN_OUT" })
    navigate("/auth");
    console.log(userState)
  }

  //* validar conexion del usuario

  const verifyToken = async() => {
    const token = localStorage.getItem("token");

    if(token){
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axiosClient.defaults.headers.common["Authorization"];
    }

    try {
      
      const respuesta = await axiosClient.get("/user/verify-user");

      dispatch({type: "INFO_USER", payload: respuesta.data.info})


    } catch (error) {
      dispatch({type: "LOGIN_ERROR"})
    }
  }

//* editar usuario 
  const userSubmitForm = async(data) => {
    console.log("hola")
    const result = await axiosClient.put("/user/my-profile", data)
    console.log(result)
  }

  

  return (
    <UserContext.Provider value={{
      registerUser,
      loginUser,
      userState,
      signOut,
      verifyToken,
      userSubmitForm
    }}>{children}</UserContext.Provider>
  )
}

export default UserProvider;