import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import { validationSchema } from './validationSchema';
import { useState } from 'react';
import { FormWrapper } from '../../components/FormWrapper';

const initialValues = {
  email: '',
  password: '',
};

export const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

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
        {({ values, errors, touched, isValid, handleChange, handleBlur }) => (
          <Form>
            <TextField
              label="Email"
              name="email"
              type="text"
              margin="dense"
              fullWidth
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email) && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />

            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel
                htmlFor="password"
                error={Boolean(errors.password) && touched.password}
              >
                Password
              </InputLabel>
              <OutlinedInput
                label="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.password) && touched.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText
                error={Boolean(errors.password) && touched.password}
              >
                {errors.password && touched.password && errors.password}
              </FormHelperText>
            </FormControl>

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
