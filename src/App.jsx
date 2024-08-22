import { useState } from "react";
import Authenticate from "./components/Aunthenticate";
import SignUpForm from "./components/SignUpForm";
export default function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <SignUpForm token = {token} setToken = {setToken}/>
      <Authenticate token = {token} setToken = {setToken}/>
    </>
  );
}

