import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/App/App.styled';


 const Contacts = () => {  
  const dispatch = useDispatch();
  
     useEffect(() => {
    dispatch(fetchContacts());
     }, [dispatch]);
    
    
    return(
      <Container>
      <ContactForm />
      <Filter />
      
      <ContactList /> 
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
  )
};

export default Contacts;