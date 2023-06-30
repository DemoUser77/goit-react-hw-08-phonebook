import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { MenuLink } from './Navigation.styled';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

return (
    <>
      <MenuLink to="/">
        Home
      </MenuLink>

      {isLoggedIn && (
        <MenuLink to="/contacts">
          Contacts
        </MenuLink>
      )}
    </>
  );
};
       
export default Navigation;