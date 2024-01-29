import './App.css';
import { Navbar } from './components/Navbar';
import { AppRouter } from './provider';

export const App = () => (
  <>
    <Navbar />
    <AppRouter />
  </>
);
