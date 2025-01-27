import React from 'react';
import { ModalWrapper, ModalContent, Overlay } from './styled';
import InviteIcon from '@/entities/projects/assets/invite.svg';
import DeleteIcon from '@/entities/projects/assets/delete.svg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <ModalContent>
          <div className="modal-buttons">
            <button onClick={onClose}>
              <img
                src={InviteIcon}
                alt="Invite"
              />
              Пригласить
            </button>
            <button onClick={onDelete}>
              <img
                src={DeleteIcon}
                alt="Delete"
              />
              Удалить
            </button>
          </div>
        </ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
