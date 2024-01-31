import * as yup from 'yup';
import { isConfirm, isPassword, isRequired } from '../../utils/validation';

export const validationSchema = yup.object().shape({
  name: isRequired,
  surname: yup.string().max(16, 'Максимум 16 символов'),
  email: isRequired.email('Некорректный адрес'),
  password: isPassword,
  confirmPassword: isConfirm('password', 'Пароли не совпадают'),
});
