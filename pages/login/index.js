import React from 'react';
import LoginForm from '../../components/loginregister/login/Login';
import CardCenter from '../../components/layout/CardCenter';
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();

  async function loginHandler(loginData) {

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        router.push('/profile')
    }})
    .catch(err => console.log(err));
    // const response = await fetch("http://localhost:5000/login", {
    //   method: "POST",
    //   body: JSON.stringify(loginData),
    //   mode: 'cors',
    //   credentials: 'include',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .catch(err => console.log(err));
  }
  return (
    <>
    <CardCenter>
      <LoginForm onLogin={loginHandler}/>
    </CardCenter>
    
    </>
  )
}

export default LoginPage