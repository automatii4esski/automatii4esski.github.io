import React from 'react';
import { MyFC } from '../../../types/common';
import { IButton } from '../../../types/UI';
import styles from './button.module.scss';

const Button: MyFC<IButton> = ({
  className,
  children,
  variant = 'fill',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
