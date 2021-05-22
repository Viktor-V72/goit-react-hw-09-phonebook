import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../Redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const initialState = { name: '', email: '', password: '' };

export default function RegisterView() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register(state));
      setState(initialState);
    },
    [state, dispatch],
  );

  return (
    <div>
      <h1>Please register to get access to create your first contact!</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
