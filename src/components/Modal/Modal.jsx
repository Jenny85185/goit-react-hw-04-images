import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow, ModalImage } from './Modal.styled';
import { useEffect } from 'react';


const modalRoot = document.querySelector('#modal-root');

function Modal({ toggleModal, largeImage }) {
  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && toggleModal();

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);
// class Modal extends Component {
//   static propTypes = {
//     toggleModal: PropTypes.func.isRequired,
//     largeImage: PropTypes.string.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     e.code === 'Escape' && this.props.toggleModal();
//   };
  const handleBackdropClick = e => {
    e.target === e.currentTarget && toggleModal();
  };

    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow>
          <ModalImage src={largeImage} alt="" />
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  
}

Modal.prototypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
 
};
export default Modal;
