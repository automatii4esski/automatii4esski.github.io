import React from 'react';
import { MyFC } from '../../../types/common';
import styles from './userAvatart.module.scss';
import { IUserAvatar } from '../../../types/UI';

const UserAvatar: MyFC<IUserAvatar> = ({ src, className, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <img className={styles.picture} src={src} alt="avatar" />
    </div>
  );
};

export default UserAvatar;
