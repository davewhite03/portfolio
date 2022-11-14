import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import styles from './SignInForm.module.css';
const SignInForm = () => {
  const [name, setName] = useState('');
  function nameHandler(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    let nameTrimmed = name.trim();
    if (nameTrimmed === null || nameTrimmed === '') {
      alert('please enter name');
    } else {
      localStorage.setItem('name', name);
      window.location.href = '/';
      console.log(name);
    }
  }
  return (
    <div>
      <form id={styles.form} action="" onSubmit={submitHandler}>
        <input type="text" id={styles.name} onChange={nameHandler}></input>
        <label for={styles.name}>Your Name</label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInForm;
