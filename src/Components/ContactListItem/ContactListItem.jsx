import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../Redux/contacts/contacts-operations';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p className={styles.contact}>
        {name}: {number}
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}
