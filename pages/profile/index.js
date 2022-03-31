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
  //upon router.push() from
  // fetch data from mongoDB, dont need API since this runs on server side and can reduce unneeded calls
  const response = await fetch("http://localhost:5000/profile", {
    method: "GET",
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const userInfo = await response.json();

  return {
    props: {
      userInfo,
    },
  };
}

export default ProfilePage;
