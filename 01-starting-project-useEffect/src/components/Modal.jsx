import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
        setOpen(true)
      },
      close: () => {
        dialog.current.close();
        setOpen(false)
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open && children}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
