import React from "react";
import cookie from "cookie"

const ProfilePage = (props) => {
  return (
    <>
      <p></p>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context.req.headers.cookie)
  // const mycookie = cookie.parse(
  //   (context.req && context.req.headers.cookie) || ""
  // );
  // let cookieNameData = {};
  // if (mycookie.sid) {
  //   cookieNameData = mycookie.sid;
  // }
  // console.log(cookieNameData)
  
  //fetch data from mongoDB, dont need API since this runs on server side and can reduce unneeded calls
  // const response = await fetch("http://localhost:5000/profile",{
  //   method: 'GET',
  //   headers: {
  //     "Cookie": cookieNameData,
  //   },
  // })
  // const newResponse = await response.json();
  // console.log(newResponse);

  return {
    props: {
        // newResponse
    },
  };
}

export default ProfilePage;
