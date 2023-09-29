import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import Home from "./Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import {Routes, Route} from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  )
};

export default App;