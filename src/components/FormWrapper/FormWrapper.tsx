import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import './FormWrapper.css';

interface IFormWrapper {
  children: ReactNode;
  title: string;
  boxWidth: string;
}

export const FormWrapper: FC<IFormWrapper> = ({
  children,
  title,
  boxWidth,
}) => (
  <Box className="FormWrapper" width={boxWidth}>
    <Box marginBottom="8px">
      <Typography align="center" variant="h5" color="primary">
        {title}
      </Typography>
    </Box>
    {children}
  </Box>
);
