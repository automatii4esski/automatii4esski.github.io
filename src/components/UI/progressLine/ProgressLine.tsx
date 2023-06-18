import React from 'react';
import ProgressDot from '../progressDot/ProgressDot';
import styles from './progressLine.module.scss';
import { MyFC } from '../../../types/common';
import { IProgressLine } from '../../../types/UI';

const ProgressLine: MyFC<IProgressLine> = ({ progress }) => {
  const ind = progress.indexOf('active');
  const width = (ind / (progress.length - 1)) * 100;

  return (
    <div className={styles.wrapper}>
      {progress.map((status, i) => (
        <ProgressDot key={i} variant={status}>
          {i + 1}
        </ProgressDot>
      ))}
      <div className={styles.line}></div>
      <div
        style={{ width: `${width}%` }}
        className={`${styles.line} ${styles.progress}`}
      ></div>
    </div>
  );
};

export default ProgressLine;
