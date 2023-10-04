import PageTitle from '../PageTitle/PageTitle';
import FavoriteCards from '../FavoriteCards/FavoriteCards';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFavCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';

const Favorite = () => {
    const cards = useSelector(state => state.cards);
    const favCards = getFavCards(cards);

    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <div>
                {favCards.length !== 0 ? <FavoriteCards /> : <h2 className={styles.header}>No Favorite Cards</h2>}
            </div>
        </div>
    )
};

export default Favorite;