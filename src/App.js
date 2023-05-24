import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { URL_PATH } from './constant';
// import Videos from './components/videos';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Body from './components/Body';
// import ContactUs from './components/ContactUs';
// import About from './components/About';
// import Error from './components/Error';
// import RestaurantDetails from './components/RestaurantDetails';
// import Profile from './components/Profile';
// import GalleryClassBaseComponents from './components/GalleryClassBaseComponents';

const Videos = lazy(() => import('./components/videos'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const Body = lazy(() => import('./components/Body'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const About = lazy(() => import('./components/About'));
const Error = lazy(() => import('./components/Error'));
const RestaurantDetails = lazy(() => import('./components/RestaurantDetails'));
const Profile = lazy(() => import('./components/Profile'));
const GalleryClassBaseComponents = lazy(() =>
  import('./components/GalleryClassBaseComponents')
);

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
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Error />
      </Suspense>
    ),

    children: [
      //NEED OUTLAT-components-from react router dom TO ACCESS OUR ALL NESTED CHILDREN
      {
        path: '/',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: URL_PATH.ABOUT,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            //if you pass your path starting / then this is give error and this is attach to root path so every time put path without '/' Got it.we pass relative/nested path using like this "profile" and access child route using Outlet component we always put Outlet inside your parent components
            path: 'profile',
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: '/contact',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: '/profile',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: '/gallery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <GalleryClassBaseComponents />
          </Suspense>
        ),
      },
      {
        path: '/videos',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Videos />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:resId',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

/**
 * <h2>Day-11</h2>
 * <h4>Data is a New Oil</h4>
 * 
 * What is Prop and state
 * Prop is only readable and pass date from parent to child 
 * and state is a local variable for store a data inside that is called state 
 * 
 * This is Prop-drilling:-
 * <ParentComponent data={"name":"Atul"}/>
 *      <ChildComponent data={"name":"Atul"}/>
 *         <GrandChildComponent data={"name":"Atul"}/>
 *  SO This is called Prop-Drilling
 * what is state Lifting-up
 * let say we have a components we pass a function to get data from child to parent components
 *   <ParentComponent data={"name":"Atul"}/> ^
 *      <ChildComponent data={"name":"Atul"}/>^
 *         <GrandChildComponent data={"name":"Atul"}/>^
 * 
 * 
 * 
 * 
  */