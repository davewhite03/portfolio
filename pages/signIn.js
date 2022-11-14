import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { SignInForm } from './components';

export default function workOuts() {
  return (
    <>
      <Head>
        <title>10-15</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInForm />
    </>
  );
}