import { RouteProps } from 'react-router';
import { MainPage } from '../pages/MainPage';
import { Registration } from '../pages/Registration';

export enum AppRoutes {
  MAIN = 'main',
  REGISTRATION = 'registration',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.REGISTRATION]: '/reg',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath.registration,
    element: <Registration />,
  },
};
