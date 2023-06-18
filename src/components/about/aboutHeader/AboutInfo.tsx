import React from 'react';
import SocialLink from '../../UI/link/SocialLink';
import { MyFC } from '../../../types/common';
import styles from './aboutInfo.module.scss';

const AboutInfo: MyFC = () => {
  const socials = [
    {
      text: 'Telegram',
      link: '#',
    },
    {
      text: 'GitHub',
      link: '#',
    },
    {
      text: 'Resume',
      link: '#',
    },
  ];

  return (
    <div>
      <p className={styles.name}>Скворцов Иван</p>
      <div className={styles.socials}>
        {socials.map((social, i) => (
          <SocialLink key={i} className={styles.link} href={social.link}>
            {social.text}
          </SocialLink>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
