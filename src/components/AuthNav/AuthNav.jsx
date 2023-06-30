import { HowToReg } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import { MenuLink, MenuContainer } from './AuthNav.styled';

 const AuthNav = () => {
  return (
    <MenuContainer>
      <MenuLink to="/register">
        <HowToReg sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
        Register
      </MenuLink>

      <MenuLink to="/login">
        <LoginIcon sx={{ color: '#fff', pr: 1, mt: 0.5 }} />
        LogIn
      </MenuLink>
    </MenuContainer>
  );
};

export default AuthNav;