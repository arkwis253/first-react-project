import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const getCard = (cards, cardId) => {
    return cards.find(card => card.id === cardId);
  };

  const dispatch = useDispatch();
  const card = useSelector(state => getCard(state.cards, props.id))
  const id = card.id;
 
  const addFavoriteHandler = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id))
  }

  const removeCardHandler = e => {
    e.preventDefault();
    console.log(id);
    dispatch(removeCard(props.id));
  }
  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button className={clsx('fa fa-star-o', card.isFavorite && styles.active)} onClick={addFavoriteHandler}></button>
        <button className="fa fa-trash" onClick={removeCardHandler}></button>
      </div>
    </li>
  );
};

export default Card;