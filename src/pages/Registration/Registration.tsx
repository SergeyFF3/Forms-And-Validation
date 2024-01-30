import { Form, Formik } from 'formik';
import { FormWrapper } from '../../components/FormWrapper';
import { validationSchema } from './validationSchema';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const Registration = () => {
  return (
    <FormWrapper title="РЕГИСТРАЦИЯ">
      <Formik
        initialValues={initialValues}
        validateOnBlur
        validationSchema={validationSchema}
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
        <Form></Form>
      </Formik>
    </FormWrapper>
  );
};
