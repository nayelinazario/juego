import React from "react";
import { CategoryList } from "../components/CategoryList";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="container">
      <p className="text-3xl text-center mt-10">
        La plataforma esta diseñada para la rehabilitación de personas con
        lesion cerebral, con daño en el hemisferio izquierdo en el lobulo
        temporal, donde se trabajan funciones ejecutivas, motoras, lenguaje
        verbal y auditivo, memoria de trabajo y cálculo.
      </p>
      <CategoryList />
      <Footer />
    </div>
  );
};
