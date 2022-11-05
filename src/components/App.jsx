import { Routes, Route } from 'react-router-dom';

import { StyledLink } from './StyledLink/StyledLink.styled';

import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { NotFound } from '../pages/NotFound';
export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
