import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../Redux/contacts';
import styles from './ContactForm.module.scss';

const initialState = { name: '', number: '' };

export default function ContactForm() {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(contactsOperations.addContact(state));
      reset();
    },
    [state, dispatch],
  );

  const reset = () => {
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <span className={styles.name}>Name</span>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.name}>Number</span>
        <input
          className={styles.input}
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
