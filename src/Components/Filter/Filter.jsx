import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../Redux/contacts';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      <span className={styles.text}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={event => dispatch(contactsActions.filter(event.target.value))}
      />
    </label>
  );
}
