import React from 'react';
import ProgressDot from '../../UI/progressDot/ProgressDot';
import styles from './progressLine.module.scss';
import { MyFC } from '../../../types/common';
import { IProgressLine } from '../../../types/UI';

const ProgressLine: MyFC<IProgressLine> = ({ width }) => {
  return (
    <div className={styles.wrapper}>
      <ProgressDot variant="done">1</ProgressDot>
      <ProgressDot variant="active">2</ProgressDot>
      <ProgressDot variant="disabled">3</ProgressDot>
      <div className={styles.line}></div>
      <div
        style={{ width: `${width}%` }}
        className={`${styles.line} ${styles.progress}`}
      ></div>
    </div>
  );
};

export default ProgressLine;
