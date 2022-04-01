import React from "react";
import CardCenter from "../../components/layout/CardCenter";
import RegisterForm from "../../components/loginregister/register/register";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();

  async function registerHandler(registerData) {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(registerData),
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
    const responseJson = await response.json();
    if (response.ok) {
      router.push("/profile");
    } else {
      alert(responseJson.message);
    }
    // .then((response) => {
    //   if (response.ok) {
    //     router.push('/profile')
    // }})

    // const data = await response.json();
    // console.log(data);

    // router.push("/profile");
  }

  return (
    <CardCenter>
      <RegisterForm onRegister={registerHandler}/>
    </CardCenter>
  );
}

export async function getServerSideProps(context) {
  //check if logged in, but cn be circumvented by manually inserting a cookie :/
  if (context.req.headers.cookie) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile'
      }
    }
  }  

  return {
    props: {
    },
  };
}

export default RegisterPage;
