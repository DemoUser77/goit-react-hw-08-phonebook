import { AppBar, Box, Container, Toolbar} from '@mui/material';
import  AuthNav  from 'components/AuthNav/AuthNav';
import  UserMenu  from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

 const AppNavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 24,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <Navigation />
          </Box>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppNavBar;









// import  UserMenu  from 'components/UserMenu/UserMenu';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// import Navigation from '../Navigation/Navigation';
// import LoginForm from 'components/LoginForm/LoginForm';
// import  Login  from 'pages/Login';
// // import { HeaderDiv } from './Header.styled';


// const Header = () => {
//     const isLoggedIn = useSelector(selectIsLoggedIn);

//     return (
//         <>
//             <Navigation />
//             {/* {isLoggedIn ? <UserMenu /> : <LoginForm />}  */}
//              {/* {isLoggedIn ? <UserMenu /> : <Login />}  */}
//         </>
//     )

// };
// export default Header;