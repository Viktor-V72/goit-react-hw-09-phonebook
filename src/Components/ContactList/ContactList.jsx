import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsSelectors from '../../Redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} key={id} id={id} />
      ))}
    </ul>
  );
}
