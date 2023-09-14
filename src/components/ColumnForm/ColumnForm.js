import styles from './ColumnForm.module.scss';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useState } from 'react';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title, icon: icon});
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
