import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import s from './GalleryItem.module.css';
import PropTypes from 'prop-types';

const GalleryItem = ({ smallImage, bigImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div>
          <Modal toggleModal={toggleModal} bigImg={bigImage} />
        </div>
      )}
      <div className={s.galleryItem}>
        <img
          onClick={toggleModal}
          className={s.galleryImage}
          src={smallImage}
          alt="example"
        />
      </div>
    </>
  );
};

GalleryItem.propTypes = {
  smallImage: PropTypes.string,
  bigImage: PropTypes.string,
};

export default GalleryItem;
