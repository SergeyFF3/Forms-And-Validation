import { Box, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { FormWrapper } from '../../components/FormWrapper';
import { TextFieldDefault } from '../../components/TextFieldDefault';
import { TextFieldPassword } from '../../components/TextFieldPassword';
import { validationSchema } from './validationSchema';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegistrationPage = () => {
  return (
    <FormWrapper title="РЕГИСТРАЦИЯ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={(values, { setSubmitting }) => {
          alert(`Регистрация прошла успешно, ${values.name}`),
            (values.name = ''),
            (values.surname = ''),
            (values.email = ''),
            (values.password = ''),
            (values.confirmPassword = ''),
            setSubmitting(false);
        }}
      >
        {({ errors, touched, values, isValid }) => (
          <Form>
            <TextFieldDefault
              id="name"
              label="Имя"
              value={values.name}
              error={(Boolean(errors.name) && touched.name) || false}
              helper={(errors.name && touched.name && errors.name) || ''}
            />
            <TextFieldDefault
              id="surname"
              label="Фамилия"
              value={values.surname}
              error={(Boolean(errors.surname) && touched.surname) || false}
              helper={
                (errors.surname && touched.surname && errors.surname) || ''
              }
            />
            <TextFieldDefault
              id="email"
              label="Почта"
              value={values.email}
              error={(Boolean(errors.email) && touched.email) || false}
              helper={(errors.email && touched.email && errors.email) || ''}
            />
            <TextFieldPassword
              id="password"
              label="Пароль"
              value={values.password}
              error={(Boolean(errors.password) && touched.password) || false}
              helper={
                (errors.password && touched.password && errors.password) || ''
              }
            />
            <TextFieldPassword
              id="confirmPassword"
              label="Подтвердить пароль"
              value={values.confirmPassword}
              error={
                (Boolean(errors.confirmPassword) && touched.confirmPassword) ||
                false
              }
              helper={
                (errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword) ||
                ''
              }
            />
            <Box marginTop="16px">
              <Button
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                disabled={!isValid}
              >
                Зарегистрироваться
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
