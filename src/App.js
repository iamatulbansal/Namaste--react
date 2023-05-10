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

/***
 * Day-6  
 * microservices
 * monolith 
 * fetch api call
 * search button lowercase
 * useEffect lifecycle method using hooks
 * create login and logout btn
 * fetch api Data using this  link https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING
 * 
 * cover conditional rendering   inside our react curly breaches
 * explore some  js expression and statement
 * create our simmer layout
 * 
 * 
 * 
 *  */ 


