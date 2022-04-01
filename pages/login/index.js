import React from "react";
import LoginForm from "../../components/loginregister/login/Login";
import CardCenter from "../../components/layout/CardCenter";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();

  async function loginHandler(loginData) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      mode: "cors",
      credentials: "include",
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
  }
  return (
    <>
      <CardCenter>
        <LoginForm onLogin={loginHandler} />
      </CardCenter>
    </>
  );
}

export async function getServerSideProps(context) {
  //check if logged in, but cn be circumvented by manually inserting a cookie :/
  if (context.req.headers.cookie) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile",
      },
    };
  }

  return {
    props: {},
  };
}

export default LoginPage;
