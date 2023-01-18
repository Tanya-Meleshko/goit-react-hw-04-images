import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ toggleModal, bigImg }) => {
  useEffect(() => {
    const onEscClose = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [toggleModal]);

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div onClick={closeModal} className={s.backdrop}>
      <div className={s.modal}>
        <img src={bigImg} alt="big" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
  bigImg: PropTypes.string,
};

export default Modal;
