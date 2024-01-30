import * as yup from 'yup';
import { isConfirm, isPassword, isRequired } from '../../utils/validation';

export const validationSchema = yup.object().shape({
  name: isRequired,
  surname: isRequired,
  email: isRequired.email('Некорректный адрес'),
  password: isPassword,
  confirmPassword: isConfirm('password', 'Пароли не совпадают'),
});
