import React from 'react';
import styles from './WorkOuts.module.css';
import ReactPlayer from 'react-player';

const WorkOuts = (props) => {
  return (
    <div className={styles.workouts}>
      {props.arry.map((e) => {
        return (
          <div className={styles.routine}>
            <h1>{e.name}</h1>
            <ReactPlayer
              controls="true"
              width="15rem"
              height="10rem"
              url={e.url}
            />
            {e.tech && (
              <ul>
                <li>{e.tech}</li>
                <li>{e.tech2}</li>
                <li>{e.tech3}</li>
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkOuts;
