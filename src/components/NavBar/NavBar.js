import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navbar}>
          <a href="/" >
            <i className="fa fa-tasks"></i>
          </a>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/favorite"><li>Favorite</li></a>
            <a href="/about"><li>About</li></a>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;