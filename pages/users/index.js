import React from "react";
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

  const users = await fetch("https://node-auth-site-netlify.herokuapp.com/users", { method: "GET" });
  const userInfos = await users.json();
  console.log(userInfos)

  //fetch data for a single meetup
  return {
    props: {
      userInfos,
    },
    revalidate: 1,
  };
}

export default UsersPage;
