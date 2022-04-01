import UserNavigation from "../../../components/layout/UserNavBar";
import User from "../../../components/User/User";

function UserPage(props) {
  return (
    <>
      <UserNavigation></UserNavigation>
      <User userInfo={props.selectedUser} />
    </>
  );
}

//Must be used with getStaticProps to define for which values of [meetupId] are pre-rendered pages
export async function getStaticPaths() {
  const users = await fetch("https://node-auth-site-netlify.herokuapp.com/users", { method: "GET" });
  const userInfos = await users.json();
  console.log(userInfos);

  return {
    fallback: false,
    paths: userInfos.map((userInfo) => ({
      params: { userId: userInfo._id.toString() },
    })),
  };
}

//runs at page build to generate pre-rendered pages on the server
//Will pre-render all possible pages of /[meetupId] in advance
export async function getStaticProps(context) {
  //to access the url value in [meetupId]
  const userId = context.params.userId;

  const users = await fetch("https://node-auth-site-netlify.herokuapp.com/users", { method: "GET" });
  const userInfo = await users.json();
  let selectedUser;
  for (let i = 0; i < userInfo.length; i++) {
    if (userInfo[i]["_id"] == userId) {
      selectedUser = userInfo[i];
    }
  }

  //fetch data for a single meetup
  return {
    props: {
      selectedUser,
    },
  };
}
export default UserPage;
