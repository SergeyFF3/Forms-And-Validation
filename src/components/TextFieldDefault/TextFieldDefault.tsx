import { Box, TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { ITextFieldDefault } from '../../types/textField';

export const TextFieldDefault: React.FC<ITextFieldDefault> = ({
  id,
  label,
  type = 'text',
  value,
  error,
  helper,
}): JSX.Element => {
  const { handleChange, handleBlur } = useFormikContext();

  return (
    <Box marginBottom="15px">
      <TextField
        name={id}
        label={label}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        helperText={helper}
        fullWidth
      />
    </Box>
  );
};
