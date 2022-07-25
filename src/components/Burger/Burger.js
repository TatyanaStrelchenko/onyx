import { useState } from 'react';
import './Hero.scss';

const Burger = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <button type="button" className="burger" onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}>
      <span />
    </button>
  );
};

export { Burger };