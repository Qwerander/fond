import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.css';

const ANIMATION_DELAY = 300;

export const Modal = (props) => {
  const { children, isOpen, onClose } = props;
    console.log(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // Новые ссылки!!!
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const classesOpen = isOpen ? `${cls.opened}` : ''
  const classesClose = isClosing ? `${cls.isClosing}` : ''

  return (
    <Portal>
      <div className={`${cls.Modal} ${classesOpen} ${classesClose}`}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
