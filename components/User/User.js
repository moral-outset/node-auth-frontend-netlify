import Image from "next/image";
import classes from "./User.module.css";

function User(props) {

  const myLoader = ({ src }) => {
    return `https://identicon-api.herokuapp.com/${props.userInfo._id}/1000?format=png`;
  };

  return (
    <div className={classes.itemContainer}>
      <Image
        className={classes.avatar}
        loader={myLoader}
        src={`https://identicon-api.herokuapp.com/${props.userInfo._id}/1000?format=png`}
        alt="profileimage"
        width={128}
        height={128}
      />
      <h1>{props.userInfo.name}</h1>
      <div className={classes.bio}>
        <p spellCheck={false}>{props.userInfo.bio}</p>
      </div>
      
    </div>
  );
}

export default User;
