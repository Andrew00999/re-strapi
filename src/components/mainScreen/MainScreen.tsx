/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import cl from "./mainScreen.module.scss";
import MainImage from "../../images/mainScreen/MainScreen.png";

import buttonIcon from "../../images/mainScreen/button-icon.svg";
import { useStateContext } from "../../context/StateContext";
import { MainScreenType } from "../../types/types";

const MainScreen = () => {
  const { scrollToHomeForm, homeData } = useStateContext();

  return (
    <div className={cl.mainScreen} id="mainScreen">
      <div className={cl.info}>
        <h3 className={cl.title}>{homeData?.attributes.mainScreenTitle}</h3>
        <ReactMarkdown
          children={homeData?.attributes.mainScreenParagraph}
          className={cl.paragraph}
        />
        <button
          type="button"
          className={cl.button}
          onClick={() => scrollToHomeForm?.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })}
        >
          {homeData?.attributes.mainScreenButton}
          <img src={buttonIcon} alt="button icon" className={cl.buttonIcon} />
        </button>
      </div>

      <img src={MainImage} alt="cat with idea" className={cl.image} />
    </div>
  );
};

export default MainScreen;
