import Image from "next/image";
import classes from "./Profile.module.css";
import React, { useState } from 'react';


function Profile(props) {

  async function blurHandler() {
    const newBioText = document.getElementById('bio').innerHTML;
    const cookie = document.cookie;
    const response = await fetch('/api/profile/bio', {
        method: 'POST',
        body: JSON.stringify({"bio":newBioText}),
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            Cookie:cookie,
        },
    })
    const newBio = await response.json();
    console.log(newBio)
  }

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
        <p id="bio" spellCheck={false} contentEditable={true} onBlur={blurHandler}>{props.userInfo.bio}</p>
      </div>
      
    </div>
  );
}

export default Profile;
