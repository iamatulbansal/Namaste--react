import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Error from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';
import Profile from './components/Profile';
import GalleryClassBaseComponents from './components/GalleryClassBaseComponents';

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
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      //NEED OUTLAT-components-from react router dom TO ACCESS OUR ALL NESTED CHILDREN
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            //if you pass your path starting / then this is give error and this is attach to root path so every time put path without '/' Got it.we pass relative/nested path using like this "profile" and access child route using Outlet component we always put Outlet inside your parent components
            path: 'profile',
            element: <Profile />,
          },
        ],
      },

      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/gallery',
        element: <GalleryClassBaseComponents />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
/***
 * todo:create custom hooks:-
 * 
 * why -create custom hooks 
 * ans- readability, reusability, maintainability,modularity
 * 
 * how create custom hooks
 * ans- whenever we create custom hooks then they have must using state and the have always remember reconciliation process and always they have own life cycle process
 * 
 * when create custom hooks
 * and- always write custom hooks top-level of our app.js components and follow folder structure we put custom hooks inside hook and utils folder got it;
 * 
 *  why move our logic to particular file
 * ans- readability, reusability, maintainability,modularity
 * 
 * <h3>difference between custom hooks 🆚 custom helper/utility </h3>
 * 
 * ans - custom hooks:- custom hooks has always written using useState or custom hooks always need and menage state inside our components/function then follow reconciliation presses
 * 
 * ans - utils/ custom logic function :-at the and of only a normal javascript function and they function dose not have react state they just a javascript function got it; 
 * 
 * <p>we move our helper, logic, like filter, sorting, searching, deleting and edit logic etc to particular folder/utils and inside file like  helpers.js</p>
 * 
 * we use any of name like and always put top level of folder:-
 * helper.js
 * utility.js
 * shared.js
 * common.js
 * 
 *
 * 
 * 
 * 
 *  
 * 
 * 
 * 
 
 */
