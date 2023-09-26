import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
  const dispatch = useDispatch();
  const columnId = props.columnId;
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
}
export default CardForm;
