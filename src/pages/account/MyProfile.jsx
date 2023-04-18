import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Container, Modal, TextField } from "@mui/material";

import { useContext, useState, useEffect } from "react";
import  UserContext  from '../../context/UserContext';

const MyProfile = () => {

  const {userState, userSubmitForm, verifyToken} = useContext(UserContext);
  
  const {firstname, lastname, email, age} = userState.infoUser;

  const [open, setOpen] = useState(false);

  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    age,
    email
  })

  const handleChange = async(e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  const sendData = () => {
    userSubmitForm(userForm)
  }

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        firstname,
        lastname,
        email,
        age
      })
    }

    updateData()
  }, [])


  const handleOpen = () => {
    setOpen(!open)
  }



  return (
    <div>
      <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "140px"
      }}>
        <Card sx={{ maxWidth: 500}}>
          <CardMedia sx={{ height: 250, width: 500}} image="https://images.unsplash.com/photo-1502480034106-af7b4369e666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" title="Hombre con cigarro" />
          <CardContent>
          <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {`${firstname} ${lastname}`}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {email}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleOpen}>Edit User</Button>
            <Button size="small">Advanced Config</Button>
          </CardActions>
        </Card>
      </Container>
      <div>
      <Box    
          component="form"
          onSubmit={(e) => sendData(e)}
          display={!open ? "none" : "flex"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px",
            marginBottom: "40px"   
          }}
          noValidate
          autoComplete="off"
        >
         
          
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            Edita tu usuario!
          </Typography>
            <TextField
                id="outlined-disabled"
                label="Firstname"
                value={userForm.firstname}
                name="firstname"
                onChange={handleChange}
                type="text"
            />
            <TextField
                id="outlined-disabled"
                label="Lastname"
                value={userForm.lastname}
                onChange={handleChange}
                name="lastname"
                type="text"
                
            />
            <TextField
                id="outlined-disabled"
                label="Age"
                value={userForm.age}
                type="number"
                onChange={handleChange}
                name="age"
            />
            <TextField
                id="outlined-disabled"
                label="Email"
                value={userForm.email}
                type="email"
                onChange={handleChange}
                name="email"
            />
            <Button type="submit">Send</Button>
          
        </Box>
      </div>
    </div>
  )
}

export default MyProfile