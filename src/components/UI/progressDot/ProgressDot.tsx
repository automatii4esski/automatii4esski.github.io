import React from 'react';
import styles from './progressDot.module.scss';
import { MyFC } from '../../../types/common';
import { IProgressDot } from '../../../types/UI';

const ProgressDot: MyFC<IProgressDot> = ({ className, children, variant }) => {
  return (
    <div className={`${styles.dot} ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default ProgressDot;
