import React, { HTMLAttributes, forwardRef } from 'react';
import styles from './input.module.scss';
import { MyFC } from '../../../types/common';
import { IInput } from '../../../types/UI';

const Input: MyFC<IInput> = forwardRef(({ className, ...props }, ref) => {
  return <input className={`${styles.input} ${className}`} {...props} />;
});

export default Input;
