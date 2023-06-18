import React from 'react';
import { MyFC } from '../../types/common';
import AboutHeader from '../../components/about/aboutHeader/AboutHeader';
import styles from './about.module.scss';
import AboutForm from '../../components/about/aboutForm/AboutForm';

const About: MyFC = () => {
  return (
    <section className={styles.about}>
      <AboutHeader />
      <AboutForm />
    </section>
  );
};

export default About;
