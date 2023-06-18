import React from 'react';
import { MyFC } from '../../../types/common';
import InputMask from 'react-input-mask';
import { IMaskedInput } from '../../../types/UI';
import styles from './input.module.scss';

const MaskedInput: MyFC<IMaskedInput> = ({ className, ...props }) => {
  return <InputMask className={`${styles.input} ${className}`} {...props} />;
};

export default MaskedInput;
