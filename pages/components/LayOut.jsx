import Head from 'next/head';
import Image from 'next/image';

import styles from './LayOut.module.css';
import SlideBar from './SlideBar';

export default function Home({ children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>10-15 </h1>
      <SlideBar />
      {children}
    </div>
  );
}
