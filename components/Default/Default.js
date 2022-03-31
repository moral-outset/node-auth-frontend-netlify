import Link from "next/link";
import Card from "../ui/Card";
import classes from "./Default.module.css";

function DefaultPage() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.actions}>
          <Link href="/login" passHref>
            <button>Login</button>
          </Link>
        </div>
        <div className={classes.actions}>
          <Link href="/register" passHref>
            <button>Register</button>
          </Link>
        </div>
        <div className={classes.actions}>
          <Link href="/users" passHref>
            <button>Users</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default DefaultPage;
