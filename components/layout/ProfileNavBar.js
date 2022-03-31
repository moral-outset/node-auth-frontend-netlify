import Link from 'next/link';

import classes from './ProfileNavBar.module.css'

function ProfileNavigation() {

  async function logoutHandler() {
    const cookie = document.cookie;
    const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        // body: JSON.stringify({"bio":newBioText}),
        mode: 'cors',
        credentials: 'include',
        headers: {
            Cookie:cookie,
        },
    })
    const res = await response.json();
    console.log(res)
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Profile</div>
      <nav>
        <ul>
          <li>
            <Link href='/users'>Users</Link>
          </li>
          <li>
            <Link href='/default'><a onClick={logoutHandler}>Logout</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProfileNavigation;
