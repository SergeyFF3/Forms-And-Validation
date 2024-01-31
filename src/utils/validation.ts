import { string, ref } from 'yup';

export const isRequired = string().required('Обязательное поле');

export const isPassword = string()
  .required('Обязательное поле')
  .matches(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    'Пароль должен содержать хотя бы одну заглавную букву, цифру и один специальный символ',
  )
  .min(6, 'Минимум 6 символов')
  .max(16, 'Максимум 16 символов');

export const isConfirm = (value: string, text: string) => {
  const confirm = string()
    .oneOf([ref(value)], text)
    .required('Обязательное поле');

  return confirm;
};
