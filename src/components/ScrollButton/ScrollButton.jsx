import { useState, useEffect } from 'react';
import s from './ScrollButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 900 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button className={s.scrollButton} onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollButton;
