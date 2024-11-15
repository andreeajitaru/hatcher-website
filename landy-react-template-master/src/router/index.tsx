import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Home />
      <Footer />
    </Suspense>
  );
};

export default Router;
