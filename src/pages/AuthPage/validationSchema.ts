import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().required('Обязательное поле').email('Некорректный адрес'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 символов'),
});
