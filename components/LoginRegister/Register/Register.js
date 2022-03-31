import { useRef } from 'react';

import Card from '../../ui/Card';
import classes from './Register.module.css';

function RegisterForm(props) {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConf = passwordConfInputRef.current.value;

    const enteredData = {
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
      passwordConfirmation: enteredPasswordConf,
    };

    props.onRegister(enteredData);//to amend this!
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' required id='password' ref={passwordInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Password Confirmation</label>
          <input type='password' required id='passwordConf' ref={passwordConfInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Signup</button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterForm;
