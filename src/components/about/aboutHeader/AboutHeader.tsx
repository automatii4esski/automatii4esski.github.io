import React from 'react';
import { MyFC } from '../../../types/common';
import styles from './aboutHeader.module.scss';
import UserAvatar from '../../UI/avatar/UserAvatar';
import AvatarIMG from '../../../img/avatar/avatar.jpg';
import AboutInfo from './AboutInfo';

const AboutHeader: MyFC = () => {
  return (
    <div className={styles.header}>
      <UserAvatar className={styles.avatar} src={AvatarIMG} />
      <AboutInfo />
    </div>
  );
};

export default AboutHeader;
