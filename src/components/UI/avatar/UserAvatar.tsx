import React from 'react';
import { MyFC } from '../../../types/common';
import { IUserAvatar } from '../../../types/about';
import styles from './userAvatart.module.scss';

const UserAvatar: MyFC<IUserAvatar> = ({ src, className, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <img className={styles.picture} src={src} alt="avatar" />
    </div>
  );
};

export default UserAvatar;
