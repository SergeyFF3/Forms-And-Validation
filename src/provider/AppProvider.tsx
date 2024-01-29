import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router';
import { routeConfig } from './routeConfig';

export const AppRouter = () => {
  const renderWithWrapper = (route: RouteProps) => {
    const element = <Suspense fallback="Loading...">{route.element}</Suspense>;

    return <Route key={route.path} path={route.path} element={element} />;
  };

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
