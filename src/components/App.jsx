import { Routes, Route, Link } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
export const App = () => {
  return (
    <>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
