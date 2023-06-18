import React, { forwardRef } from 'react';
import { MyFC } from '../../../types/common';
import { IInputBlock } from '../../../types/UI';
import styles from './inputBlock.module.scss';
import Input from './Input';

const InputBlock: MyFC<IInputBlock> = ({
  className,
  blockTitle: title,
  tip,
  error,
  children,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.error}>{error}</p>
      {children}
      <p className={styles.tip}>{tip}</p>
    </div>
  );
};

export default InputBlock;
