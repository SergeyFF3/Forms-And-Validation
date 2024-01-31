import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormikContext } from 'formik';
import { useState } from 'react';
import { ITextFieldDefault } from '../../types/textField';

export const TextFieldPassword: React.FC<ITextFieldDefault> = ({
  id,
  label,
  value,
  error,
  helper,
}): JSX.Element => {
  const { handleChange, handleBlur } = useFormikContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" fullWidth sx={{ marginBottom: '12px' }}>
      <InputLabel htmlFor={label} error={error}>
        {label}
      </InputLabel>
      <OutlinedInput
        label={label}
        name={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
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
      <FormHelperText error={error}>{helper}</FormHelperText>
    </FormControl>
  );
};
