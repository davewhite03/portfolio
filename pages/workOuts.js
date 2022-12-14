import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SlideBar, WorkOuts } from './components';
import styles from '../styles/Home.module.css';
import styles2 from '../styles/Pagination.module.css';

const routines = [
  {
    name: 'routine 1',
    url: 'https://www.youtube.com/watch?v=9LIAhxQHmak',
    tech: 'Swings',
    tech2: 'Push Ups',
    tech3: 'Shadow Box (Head Movement )',
  },
  {
    name: 'routine 2',
    url: 'https://www.youtube.com/watch?v=9LIAhxQHmak',
    tech: 'Standing Russian',
    tech2: 'Lower Crawl',
    tech3: 'Shadow Box(Lead Kicks)',
  },
  {
    name: 'routine 3',
    url: 'https://www.youtube.com/watch?v=9LIAhxQHmak',
    tech: 'Alt Cleans',
    tech2: 'Hip Heist',
    tech3: 'Shadow Box(jab focus)',
  },
  {
    name: 'routine 4',
    url: 'https://www.youtube.com/watch?v=9LIAhxQHmak',
    tech: 'Swings',
    tech2: 'Push Ups',
    tech3: 'Shadow Box (Head Movement )',
  },
  {
    name: 'routine 5',
    url: 'https://www.youtube.com/watch?v=9LIAhxQHmak',
    tech: 'Standing Russian',
    tech2: 'Lower Crawl',
    tech3: 'Shadow Box(Lead Kicks)',
  },
  {
    name: 'routine 6',
    url: 'https://www.youtube.com/watch?v=9LIAhxQHmak',
    tech: 'Alt Cleans',
    tech2: 'Hip Heist',
    tech3: 'Shadow Box(jab focus)',
  },
];
export default function workOuts() {
  const [currentPage, setcurrentPage] = useState(1);
  const [recordsPerPage] = useState(2);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = routines.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(routines.length / recordsPerPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setcurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setcurrentPage(currentPage - 1);
  };
  return (
    <>
      <Head>
        <title>10-15</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles2.pageContainer}>
        <ul className={styles2.pageList}>
          <li>
            <a onClick={prevPage} href="#">
              previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li
              key={pgNumber}
              className={`page-item ${
                currentPage == pgNumber ? 'active' : ''
              } `}
            >
              <a onClick={() => setcurrentPage(pgNumber)} href="#">
                {pgNumber}
              </a>
            </li>
          ))}
          <li>
            <a onClick={nextPage} href="#">
              After
            </a>
          </li>
        </ul>

        <WorkOuts name="Routine" arry={currentRecords} />
      </div>
    </>
  );
}
