import styles from './ColumnForm.module.scss';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
      dispatch(addColumn({ title, icon }));
      setTitle('');
      setIcon('');
  }

  const [icon, setIcon] = useState('');
  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title: </label><TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label>Icon: </label><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add Column</Button>
    </form>
)};

export default ColumnForm;
