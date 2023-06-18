import { object, string } from 'yup';

const test = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const aboutUserSchema = object().shape({
  phone: string()
    .matches(test, 'Неправильно введен номер')
    .required('Обязательное поле'),
  email: string().email('123').required('Обязательное поле'),
});
