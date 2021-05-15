import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import style from "styles/Dialog.module.css";

const _Dialog = (
  { title, buttonText, render = () => null, onConfirm },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropShadowRef = useRef(null);

  useImperativeHandle(ref, () => ({
    Close: () => {
      setIsOpen(false);
    },
    Open: () => {
      setIsOpen(true);
    },
  }));

  const onConfirmClick = () => {
    onConfirm();
    setIsOpen(false);
  };

  const onBackdropClose = e =>{
    if(e.target === dropShadowRef.current) setIsOpen(false)
  }

  if(!isOpen) return null;
  return (
    <div ref={dropShadowRef} className={style.backdrop} onClick={onBackdropClose}>
      <div
        className={style.popup}
      >
        <div className={style.content}>
          <div className='title'>{title}</div>
          {render()}
          <button className={style.button} onClick={onConfirmClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export const Dialog = forwardRef(_Dialog);
