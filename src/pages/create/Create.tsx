import React from 'react';
import styles from './create.module.scss';
import ProgressLine from '../../components/create/progressLine/ProgressLine';

const Create = () => {
  return (
    <section className={styles.create}>
      <ProgressLine width={50} />
    </section>
  );
};

export default Create;
