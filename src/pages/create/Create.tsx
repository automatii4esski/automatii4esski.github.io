import React from 'react';
import styles from './create.module.scss';
import ProgressLine from '../../components/UI/progressLine/ProgressLine';
import CreateForm from '../../components/create/createForm/CreateForm';

const Create = () => {
  return (
    <section className={styles.create}>
      <ProgressLine progress={['done', 'active', 'disabled']} />
      <CreateForm />
    </section>
  );
};

export default Create;
