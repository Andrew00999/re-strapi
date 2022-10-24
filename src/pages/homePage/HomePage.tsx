/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { useStateContext } from "../../context/StateContext";
import VacancyList from "../../components/vacanciesList";
import FAQ from "../../components/faq/FAQ";
import FeedbackForm from "../../components/forms/feedbackForm";
import MainScreen from "../../components/mainScreen/MainScreen";
import Partners from "../../components/partners/Partners";
import Spheres from "../../components/spheres";
import Testimonials from "../../components/testimonials";
import cl from "./HomePage.module.scss";

export const HomePage = () => {
  const { scrollToHomeForm } = useStateContext();

  return (
    <>
      <MainScreen />
      <div className={cl.container}>
        <h1 className={cl.mainTitle}>
          Наші основні
          <br />
          сфери діяльності
        </h1>
        <Spheres />
        <VacancyList />
        <FAQ />
        <Partners />
      </div>
      <Testimonials />
      <div
        className={cl.container}
        ref={scrollToHomeForm}
      >
        <FeedbackForm />
      </div>
    </>
  );
};
