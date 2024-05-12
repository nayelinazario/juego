import React from "react";
import { CategoryList } from "../components/CategoryList";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="container">
      <CategoryList />
      <Footer />
    </div>
  );
};
