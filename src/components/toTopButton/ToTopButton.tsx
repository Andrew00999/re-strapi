import React from 'react';
import { FormsSvg } from '../../icons/form/FormsSvg';
import cl from './toTopButton.module.scss';

const ToTopButton = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={cl.to_top_btn}
      onClick={scrollTop}
    >
      <FormsSvg id="top" />
    </button>
  );
};

export default ToTopButton;
