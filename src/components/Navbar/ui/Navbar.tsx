import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import { NavbarList } from '../model/selector/getNavbarList';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {NavbarList.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                {item.text}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
