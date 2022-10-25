/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @typescript-eslint/quotes */
import React from "react";
import cl from "./mainScreen.module.scss";
import MainImage from "../../images/mainScreen/MainScreen.png";

import buttonIcon from "../../images/mainScreen/button-icon.svg";
import { useStateContext } from "../../context/StateContext";

const MainScreen = () => {
  const { scrollToHomeForm } = useStateContext();

  return (
    <div className={cl.mainScreen} id="mainScreen">
      <div className={cl.info}>
        <h3 className={cl.title}>Хочешь pаботать в сфере IT удаленно?</h3>
        <p className={cl.paragraph}>
          Аутстаффинговая компания
          <span className={cl.paragraph_strong}> RemotEmployees </span>
          предлагает Вам удаленную работу на международных проектах. Мы дадим
          вам возможность работать из любой точки мира уже сейчас!
        </p>
        <button
          type="button"
          className={cl.button}
          onClick={() => scrollToHomeForm?.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })}
        >
          Получить работу
          <img src={buttonIcon} alt="button icon" className={cl.buttonIcon} />
        </button>
      </div>

      <img src={MainImage} alt="cat with idea" className={cl.image} />
    </div>
  );
};

export default MainScreen;
