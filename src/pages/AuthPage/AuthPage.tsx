import { Box, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { FormWrapper } from '../../components/FormWrapper';
import { TextFieldPassword } from '../../components/TextFieldPassword';
import { TextFieldDefault } from '../../components/TextFieldDefault';

const initialValues = {
  email: '',
  password: '',
};

export const AuthPage = () => {
  return (
    <FormWrapper title="АВТОРИЗАЦИЯ" boxWidth="480px">
      <Formik
        validationSchema={validationSchema}
        validateOnBlur
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          alert('Вы авторизовались'),
            (values.email = ''),
            (values.password = ''),
            setSubmitting(false);
        }}
      >
        {({ values, errors, touched, isValid }) => (
          <Form>
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
            <Box marginTop="16px">
              <Button
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                disabled={!isValid}
              >
                Войти
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
