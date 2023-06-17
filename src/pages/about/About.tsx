import React from 'react';
import { MyFC } from '../../types/common';
import AboutHeader from '../../components/about/AboutHeader';
import styles from './about.module.scss';

const About: MyFC = () => {
  return (
    <section className={styles.about}>
      <AboutHeader />
    </section>
  );
};

export default About;
