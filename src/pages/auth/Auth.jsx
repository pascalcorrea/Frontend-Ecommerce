import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Auth = () => {
  const state = useContext(UserContext)

  const [signUp, setSignUp] = useState(false);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password:""
  }
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if(signUp){
       state.registerUser(user)
    } else {
       state.loginUser(user)
    }

    setUser(initialValues)

  }

  console.log(user)

  const resetState = () => {
    setSignUp(!signUp)
    setUser(initialValues)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #7733dd" } }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {signUp ? "SignUp" : "Login"}
          </Typography>
          {signUp && (
            <TextField
              onChange={handleChange}
              type={"text"}
              placeholder="Firstname"
              name="firstname"
              variant="outlined"
              value={user.firstname}
            />
          )}
          {signUp && (
            <TextField
              onChange={handleChange}
              type={"text"}
              placeholder="Lastname"
              name="lastname"
              variant="outlined"
              value={user.lastname}
            />
          )}
          <TextField
            onChange={handleChange}
            type={"email"}
            placeholder="Email"
            name="email"
            variant="outlined"
            value={user.email}
          />
          <TextField
            onChange={handleChange}
            type={"password"}
            placeholder="Password"
            name="password"
            variant="outlined"
            value={user.password}
          />
          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {signUp ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {!signUp ? "Change to Signup" : "Change to login"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
