import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { isAuthenticated, isLoading } = useAuth0();
  if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default Login;
