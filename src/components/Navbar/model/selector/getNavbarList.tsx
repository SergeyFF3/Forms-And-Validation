export interface INavbarList {
  text: string;
  path: string;
}

export const NavbarList: INavbarList[] = [
  {
    path: '/',
    text: 'Авторизация',
  },
  {
    path: '/reg',
    text: 'Регистрация',
  },
];
