import { object, string } from 'yup';

const phoneRegExp = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const nicknameRegExp = /^[a-zA-Z0-9]+$/;

export const aboutUserSchema = object().shape({
  phone: string()
    .matches(phoneRegExp, 'Неправильно введен номер')
    .required('Обязательное поле'),
  email: string()
    .email('Неправильно введена почта')
    .required('Обязательное поле'),
});

export const firstStepSchema = object().shape({
  nickname: string()
    .matches(nicknameRegExp, 'Специальные символы запрещены')
    .length(30, 'Максимум 30 символов')
    .required('Обязательное поле'),
  email: string().email('123').required('Обязательное поле'),
});
