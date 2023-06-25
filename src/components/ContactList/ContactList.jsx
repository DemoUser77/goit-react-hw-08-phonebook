import { useSelector,useDispatch} from 'react-redux';
import { deleteContact } from 'redux/operations';
import { List, Item, Button, Name } from './ContactList.styled';



export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => {
        return state.contacts.items.filter(item =>
            item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim()))
      });
    
    return (
        <List>
            {contacts.map(({ id, name, phone }) => (
                <Item key={id}>
                    <Name>{name}:</Name>
                    <Name>{phone}</Name>
                    <Button
                        type="button"
                        id={id}
                        onClick={() => dispatch(deleteContact(id))}>
                        Delete
                    </Button>
                </Item>
            ))
            }
        </List>
    );
};
