import React from "react";
import Image from "next/image";
import UserCardList from "../../components/UserCardList/UserCardList";
import UsersNavigation from "../../components/layout/UsersNavBar";

const UsersPage = (props) => {

  return (
    <>
      <UsersNavigation></UsersNavigation>
      <UserCardList userInfo={props.userInfos} />
    </>
  );
};

export async function getStaticProps(context) {
  //to access the url value in [meetupId]
  // const userId = context.params.userId;

  const users = await fetch("http://localhost:5000/users", { method: "GET" });
  const userInfos = await users.json();
  console.log(userInfos)

  //fetch data for a single meetup
  return {
    props: {
      userInfos,
    },
  };
}

export default UsersPage;
