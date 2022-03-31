import React from "react";
import CardCenter from "../../components/layout/CardCenter";
import RegisterForm from "../../components/loginregister/register/register";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();

  async function registerHandler(registerData) {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/profile");
  }

  return (
    <CardCenter>
      <RegisterForm onRegister={registerHandler}/>
    </CardCenter>
  );
}

export default RegisterPage;
