import styles from './FavoriteCards.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const FavoriteCards = () => {
  const cards = useSelector(state => state.cards);

  const getFavCards = cards => cards.filter(card => card.isFavorite === true);
  const favCards = getFavCards(cards);

  return (
    <div className={styles.container}>

    <article className={styles.column}>
      <ul className={styles.cards}>
        {favCards.map(card => <Card key={card.id} id={card.id} title={card.title} />)};
      </ul>
    </article>
    </div>
  );
};

export default FavoriteCards;