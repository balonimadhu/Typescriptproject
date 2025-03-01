import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../img/logo.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';

// import { addToCart } from '../redux/cartSlice';


const pages = ['Home', 'Men','Women', 'About Us', 'Contact Us'];
// const settings = ['Profile', 'Login', 'Logout'];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartCount);


  const handlePageClick = (page: string) => {
    switch (page) {
      case 'Home':
        navigate('/'); 
        break;
      case 'Men':
        navigate('/menswear'); 
        break;
        case 'Women':
        navigate('/womenswear'); 
        break;
      case 'About Us':
        navigate('/about');
        break;
      case 'Contact Us':
        navigate('/contact'); 
        break;
        
      default:
        navigate('/');
        break;
    }
  };

  const goToCart = () => {
    navigate('/addtocart');  
  };
  const goToLogin = () => {
    navigate('/login');
  };
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [navEl, setNavEl] = React.useState<Element & EventTarget | null>(null);
  const [user, setUser] = React.useState<(Element & EventTarget) | null>(null);


  

  const handleOpenNavMenu = (event: React.MouseEvent) => {
    setNavEl(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent) => {
    setUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavEl(null);
  };

  const handleCloseUserMenu = () => {
    setUser(null);
  };

    const handleLogin = () => {
      setLoggedIn(true);
      handleCloseUserMenu();
    }
    const handleLogout = () => {
      setLoggedIn(false);
      handleCloseUserMenu();
    };
  
    const goToProfile = () => {
      navigate('/profile');
      handleCloseUserMenu();
    };
  // Styled component for search bar
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '15rem',
        '&:focus': {
          width: '20rem',
        },
      },
    },
  }));

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2E5077" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box display="flex" justifyContent="center" alignItems="center" m={2}>
            <Avatar alt="Logo" src={logo} sx={{ width: 56, height: 56 }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(navEl)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography sx={{ textAlign: 'center', fontWeight:"bold" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)} 
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
         

          <Search sx={{ marginRight: "3rem" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="M" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '5rem' }}
              id="menu-appbar"
              anchorEl={user}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(user)}
              onClose={handleCloseUserMenu}
            >
              {/* {loggedIn ? (
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
             {loggedIn ? (
                <Box>
                  <MenuItem onClick={goToProfile}>
                    <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                  </MenuItem>
                </Box>
              ) : (
                <MenuItem onClick={handleLogin}>
                  <Typography sx={{ textAlign: 'center' }} onClick = {goToLogin}>Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <IconButton  sx={{ color: 'white' }} onClick={goToCart}>
           
              <ShoppingCartIcon sx={{marginLeft:"2rem"}} />
              {cartCount > 0 && (
            <Box
              sx={{
                position: 'absolute',
                top: 1,
                right: 3,
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '2rem',
                padding: '0.2rem 0.5rem',
                fontSize: '0.7rem',
              }}
            >
              {cartCount}
            </Box>
          )}
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
