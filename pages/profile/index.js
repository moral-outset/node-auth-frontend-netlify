import React from "react";
import Profile from "../../components/Profile/Profile";
import Image from "next/image";
import ProfileNavigation from "../../components/layout/ProfileNavBar";

const ProfilePage = (props) => {
  return (
    <>
      <ProfileNavigation></ProfileNavigation>
      <Profile userInfo={props.userInfo} />
    </>
  );
};

export async function getServerSideProps(context) {

  // fetch data from mongoDB, dont need API since this runs on server side and can reduce unneeded calls
  const response = await fetch("https://node-auth-site-netlify.herokuapp.com/profile", {
    method: "GET",
    headers: {
      Cookie: context.req.headers.cookie,
    },
  })

  const userInfo = await response.json();
  //if already not logged in yet, redirect to '/'
  if (response.status==400) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }  

  return {
    props: {
      userInfo,
    },
  };
}

export default ProfilePage;
