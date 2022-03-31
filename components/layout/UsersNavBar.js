import Link from 'next/link';

import classes from './UsersNavBar.module.css'

function UsersNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Users Page</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Back</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default UsersNavigation;
