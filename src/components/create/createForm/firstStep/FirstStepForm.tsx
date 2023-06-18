import React from 'react';
import InputBlock from '../../../UI/input/InputBlock';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../../UI/button/Button';
import Input from '../../../UI/input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { firstStepSchema } from '../../../../utils/schemas';
import styles from './firstStep.module.scss';

const FirstStepForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(firstStepSchema),
    defaultValues: {},
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inner}>
        <InputBlock error={errors.nickname?.message} blockTitle="Nickname">
          <Controller
            control={control}
            name="nickname"
            render={({ field }) => (
              <Input
                value={field.value}
                disabled
                onBlur={field.onBlur}
                onChange={field.onChange}
              />
            )}
          />
        </InputBlock>

        <InputBlock error={errors.email?.message} blockTitle="Email">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                value={field.value}
                disabled
                onBlur={field.onBlur}
                onChange={field.onChange}
              />
            )}
          />
        </InputBlock>
      </div>
      <div className={styles.buttons}>
        <Button variant="hollow">Назад</Button>
        <Button type="submit">Далее</Button>
      </div>
    </form>
  );
};

export default FirstStepForm;
