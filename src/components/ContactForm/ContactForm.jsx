import {  useDispatch,useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

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
        dispatch(addContact({ name: formName, phone: formNumber } ));
        toast.success(`${formName} is added to the contacts!`);
        form.reset();
            
    };
    
        return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>

                <Button type="submit">Add contact</Button>
            </Form>
        )
    };
