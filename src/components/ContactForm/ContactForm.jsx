import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';
import {Box,Button,Container,TextField,} from '@mui/material';


export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formName = form.elements.name.value;
        const formNumber = form.elements.phone.value;
 
        if (contacts.some(({ name }) => name.toLowerCase() === formName.toLowerCase())) {
            return toast.warn(`${formName} is already in contacts`);
        }
        if (contacts.some(({ phone }) => phone === formNumber)) {
            return toast.warn(`${formNumber} is already in contacts`);
        }
      dispatch(addContact({ name: formName, phone: formNumber }));
      console.log();
        toast.success(`${formName} is added to the contacts!`);
        form.reset();
            
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
              sx={{ m: 1, width: '100%' }}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="For example Adrian, Jacob Mercer"
                     
            />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              label="Phone"
              name="phone"
              required
              variant="standard"
              id="standard-basic"
              title="111-11-11"
              sx={{ m: 1, width: '100%' }}
            ></TextField>
          </Box>
          
          <Button  type="submit" variant="contained">
           Add contact
          </Button>
                </form>
            </Box>
            </Container>
           
)
};

