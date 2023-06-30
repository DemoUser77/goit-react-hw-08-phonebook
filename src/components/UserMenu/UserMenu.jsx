import { useSelector,useDispatch } from "react-redux";
import { selectUser } from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-operations";
import { Button, Stack, Typography } from '@mui/material';


const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
   <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        sx={{ fontFamily: 'cursive', textShadow: '1px 1px 2px black' }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{ backgroundColor: '#1d58a5', flexShrink: 0 }}
      >
        Logout
      </Button>
    </Stack>
  )
};

export default UserMenu;