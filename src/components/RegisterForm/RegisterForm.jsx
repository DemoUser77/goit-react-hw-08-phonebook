import * as React from 'react';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import {Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { BottomText, StyledLink } from "./RegisterForm.styled";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { VisibilityOffSharp, VisibilitySharp } from '@mui/icons-material';

 const RegisterForm = () => {
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
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
            .unwrap()
            .then(() => {
               toast.success("Welcome to phonebook!");;
            })
            .catch(() => {
                toast.error("Incorrect login or password");
        })
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
              label="Name"
              name="name"
              required
              variant="standard"
              id="outlined-start-adornment"   
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="For example Adrian, Jacob Mercer"
              sx={{ m: 1, width: '100%' }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              label="Email"
              name="email"
              required
              variant="standard"
              id="standard-basic"
              title="For example user@mail.com"
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
          <Button variant="contained" type="submit">
               Register
          </Button>
        </form>
        <BottomText>
          Already have an account? <StyledLink to="/login">LogIn</StyledLink>
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
     
export default RegisterForm;