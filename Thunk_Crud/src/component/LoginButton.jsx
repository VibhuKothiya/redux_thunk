import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <center><button className="button-style" onClick={() => loginWithRedirect()}>Log In</button></center>;
};

export default LoginButton;