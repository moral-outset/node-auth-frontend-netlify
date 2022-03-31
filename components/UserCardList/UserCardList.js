import UserCard from "../UserCard/UserCard";
import classes from "./UserCardList.module.css";

function UserCardList(props) {
  const userInfosArray = props.userInfo;
  const userCards = userInfosArray.map((userInfo) => (
    <UserCard key={userInfo._id} userInfo={userInfo} />
  ));
  return <div className={classes.wrapper}>{userCards}</div>;
}

export default UserCardList;
