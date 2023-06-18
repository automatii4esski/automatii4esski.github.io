import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { aboutUserSchema } from '../../../utils/schemas';
import InputBlock from '../../UI/input/InputBlock';
import Button from '../../UI/button/Button';
import styles from './aboutForm.module.scss';
import { selectAboutData } from '../../../store/about/aboutSelector';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Input from '../../UI/input/Input';
import MaskedInput from '../../UI/input/MaskedInput';
import { useNavigate } from 'react-router-dom';

const AboutForm = () => {
  const { email, phone } = useTypedSelector(selectAboutData);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(aboutUserSchema),
    defaultValues: {
      email: email,
      phone: phone,
    },
  });

  const onSubmit = handleSubmit(() => {
    navigate('create');
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inner}>
        <InputBlock error={errors.phone?.message} blockTitle="Номер телефона">
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <MaskedInput
                disabled
                mask="+7 (999) 999-99-99"
                value={field.value}
                alwaysShowMask
                onChange={field.onChange}
                onBlur={field.onBlur}
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
      <Button type="submit">Начать</Button>
    </form>
  );
};

export default AboutForm;
