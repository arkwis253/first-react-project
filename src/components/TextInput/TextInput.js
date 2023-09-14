import styles from './TextInput.module.scss';

const TextInput = props => {
    return (<input type="text" className={styles.input} value={props.value} placeholder={props.placeholder} onChange={props.onChange}></input>);
};

export default TextInput;