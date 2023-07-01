import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/contacts/selectors';
import { setContactsFilter } from 'redux/contacts/filterSlice';
import { Label} from './Filter.styled';
import {Box,Container,TextField} from '@mui/material';


export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectContactsFilter);

    const handleChangeFilter =({currentTarget:{value}}) => {
        const dataValue = value.toLowerCase().trim();
        dispatch(setContactsFilter(dataValue))
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
          mt: '10px',
          p: '10px',
          border: '2px solid #17046b',
          bgcolor: '#ebf1f1',
          borderRadius: '20px',
        }}
      >
        <Label>
            <h2>Contacts</h2>
            <p>Find contacts by name</p>     
            <TextField
              type="text"
              label="Name"
              name="filter"
              required
              variant="standard"
              id="outlined-start-adornment"
              value={filter}
              onChange={handleChangeFilter} 
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title=" For example Adrian, Jacob Mercer"
              sx={{ m: 1, width: '100%' }}
            />
            </Label>
            </Box>
        </Container>
    );

};
