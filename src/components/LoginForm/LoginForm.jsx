import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";
import { StyledLink,BottomText } from "./LoginForm.styled";
import { Box, Button, Container, FormControl, Input, InputLabel, TextField, InputAdornment,IconButton, } from '@mui/material';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { VisibilityOffSharp, VisibilitySharp } from '@mui/icons-material';


const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
   
 
    const handleSubmit = event => {
      event.preventDefault();
       
        const form = event.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
            .unwrap()
            .then(() => {
                toast.success("Welcome back!");
            })
            .catch(() => {
                 toast.error("Incorrect login or password");
            });
        // form.reset();
    };


return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '420px',
        textAlign: 'center',
          mt: '50px',
          p: '10px',
          border: '2px solid #17046b',
          bgcolor: '#ebf1f1',
          borderRadius: '20px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            
            <TextField
              name="email"
              label="Email"
              required
              variant="standard"
              id="standard-basic"
              title="Email must contain at list '@'. For example user@mail.com"
              sx={{ m: 1, width: '100%' }}
            ></TextField>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           
            <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                label="Password"
                name="password"
                required
                id="standard-adornment-password"
                title="Your Password must include a minimum of 15 characters"
              type={showPassword ? 'text' : 'password'}
               endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                       aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffSharp sx={{ color: '#0f7ec9' }} />
                      ) : (
                        <VisibilitySharp />
                      )} 
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Button type="submit" variant="contained">
            LogIn
          </Button>
        </form>
        <BottomText>
          Don’t have an account yet?{' '}
          <StyledLink to="/register">Sign up</StyledLink>
        </BottomText>
    </Box>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
/>
    </Container>
  );
};
         

export default LoginForm;