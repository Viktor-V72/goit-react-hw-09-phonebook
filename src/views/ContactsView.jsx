import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../Components/ContactForm/ContactForm';
import ContactList from '../Components/ContactList/ContactList';
import Filter from '../Components/Filter/Filter';
import contactsOperations from '../Redux/contacts/contacts-operations';
import contactsSelectors from '../Redux/contacts/contacts-selectors';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoading && <h3>Loading...</h3>}
      <ContactList />
    </>
  );
}
