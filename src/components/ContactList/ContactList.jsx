import { useSelector,useDispatch} from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { List, Item, Name } from './ContactList.styled';
import {Box, Container, Button} from '@mui/material';


export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => {
        return state.contacts.items.filter(item =>
            item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim()))
      });
    
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
        <List>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <Name>{name}:</Name>
                    <Name>{number}</Name>
                    <Button sx={{
                            ml: 'auto',
                            p:0,
                        }}
                        type="button"
                        variant="contained"
                        id={id}
                        onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                </Item>
            ))
            }
            </List>
        </Box>
    </Container>
    );
};
