import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [ //NEED OUTLAT-components-from react router dom TO ACCESS OUR ALL NESTED CHILDREN
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            //if you pass your path starting / then this is give error and this is attach to root path so every time put path without '/' Got it.we pass relative/nested path using like this "profile" and access child route using Outlet component we always put Outlet inside your parent components 
            path: "profile",
            element: <Profile />,

          },
        ]
      },
      // {
      //   path: "/about/profile",//if you use like this this is also perfectly fine but we will use path using Outlet components get children using Outlet
      //   element: <Profile />,
      // },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
