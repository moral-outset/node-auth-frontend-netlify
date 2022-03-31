import Link from 'next/link';

import classes from './UserNavBar.module.css'

function UserNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>User Page</div>
      <nav>
        <ul>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default UserNavigation;
