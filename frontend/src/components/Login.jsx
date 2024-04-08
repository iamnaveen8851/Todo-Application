import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/Login/action";
import { Navigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import { toggleTheme } from "../redux/Theme/action";
const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const {login, theme} = useSelector((state) => state);
  const {isDarkTheme} = theme
  console.log(isDarkTheme);

  const dispatch = useDispatch();
// handle Login
  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(loginSuccess(formState));
  };

// toggle theme
function handleTheme(){
  dispatch(toggleTheme())
}




  if (login.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <Box h={"100vh"} bg={isDarkTheme ? "black" : "white"} color={isDarkTheme? "white" : "black"}>
      <Button onClick={handleTheme}>Change-Theme</Button>
      <Heading textAlign={"center"} mt={"5%"} textDecoration={"underline"}>
        Login
      </Heading>
      <Box boxShadow="base" rounded="md" w="30%" p={5} m={"auto"}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password"
              value={formState.password}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: e.target.value,
                })
              }
            />
          </FormControl>
          <br />
          <Input w="40%" bg="blue" color="white" type="submit" />
        </form>
      </Box>
      </Box>
    </>
  );
};

export default Login;
