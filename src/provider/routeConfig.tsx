import { RouteProps } from 'react-router';
import { AuthPage } from '../pages/AuthPage';
import { RegistrationPage } from '../pages/RegistrationPage';

export enum AppRoutes {
  AUTH = 'auth',
  REGISTRATION = 'registration',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.AUTH]: '/',
  [AppRoutes.REGISTRATION]: '/reg',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath.registration,
    element: <RegistrationPage />,
  },
};
