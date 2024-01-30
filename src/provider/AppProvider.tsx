import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router';
import { routeConfig } from './routeConfig';

export const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    const element = <Suspense fallback="Loading...">{route.element}</Suspense>;

    return <Route key={route.path} path={route.path} element={element} />;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
      }}
    >
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Box>
  );
};
