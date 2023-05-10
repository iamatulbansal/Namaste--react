import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

