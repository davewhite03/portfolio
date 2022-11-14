import React from 'react';
import styles from './slideBar.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SignInForm from './SignInForm';

const SlideBar = () => {
  const [user, setUser] = useState(false);

  const signOutHandler = () => {
    localStorage.clear;
    setUser(false);
  };

  useEffect(() => {
    console.log(localStorage.getItem('name'));
    if (localStorage.getItem('name') === null) {
      alert('please sign in');
      setUser(false);
      console.log(user);
    } else {
      setUser(true);
      console.log(user);
    }
  }, []);

  return (
    <>
      {' '}
      <input type="checkbox" id={styles.btnControl} />
      <label for={styles.btnControl} id={styles.label}>
        <span>X</span>
      </label>
      <div className={styles.innerMenu}>
        <ul>
          {!user ? (
            <li>
              <Link href="/signIn">Sign In</Link>
            </li>
          ) : (
            <>
              {' '}
              <li>
                <Link href="/workOuts">Work Outs</Link>
              </li>
              <li>
                <Link href="/techniques"> Techniques</Link>
              </li>
              <li>
                <Link href="/" onClick={signOutHandler}>
                  Sign Out
                </Link>
              </li>{' '}
            </>
          )}
        </ul>
      </div>
      <div className={styles.slidebar}></div>
    </>
  );
};

export default SlideBar;
