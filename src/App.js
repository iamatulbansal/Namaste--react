import React, { lazy, Suspense, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { URL_PATH } from './constant';
import UserContext from './userContext';
import { Provider } from 'react-redux'
import store from './redux/store';
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

const InstaMart = lazy(() => import('./components/InstaMart'));
const Videos = lazy(() => import('./components/Videos'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const Body = lazy(() => import('./components/Body'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const About = lazy(() => import('./components/About'));
const Error = lazy(() => import('./components/Error'));
const RestaurantDetails = lazy(() => import('./components/RestaurantDetails'));
const Profile = lazy(() => import('./components/Profile'));
const CartPage = lazy(() => import('./components/CartPage'));
const GalleryClassBaseComponents = lazy(() =>
  import('./components/GalleryClassBaseComponents')
);

const AppLayout = () => {

  const [user, setUser] = useState({

    name: "Atul Bansal",
    email: "Atul@gmail.com"

  })
  return (
    <React.Fragment>

      <UserContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
        path: '/instamart',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <CartPage />
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
root.render(<Provider store={store}>
  <RouterProvider router={appRouter} />
</Provider>);

/**
  * 
  */