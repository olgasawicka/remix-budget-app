import type { FC, ReactElement, ReactFragment, ReactNode } from 'react';
type ModalProps = {
  children: ReactElement | ReactFragment | ReactNode;
  onClose: () => JSX.Element;
};

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div onClick={onClose} className="flex">
      <div className="flex">
        <dialog open onClick={(event) => event.stopPropagation()}>
          {children}
        </dialog>
      </div>
    </div>
  );
};

export default Modal;
