import React from 'react';
import { MyFC } from '../../../types/common';
import { ISocialLink } from '../../../types/UI';
import styles from './socialLink.module.scss';

const SocialLink: MyFC<ISocialLink> = ({ children, className, ...props }) => {
  return (
    <a className={`${styles.link} ${className}`} {...props}>
      {children}
    </a>
  );
};

export default SocialLink;
