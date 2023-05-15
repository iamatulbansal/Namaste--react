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
/***
 * <h2>Day-9</h2>
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
 * move logic to helper.js file
 * break your code to small small chunk
 * convert fetch api logic to custom hooks
 * always create hooks using/starting with use like this "useOnline",useRestaurant
 * custom hooks always maintain state variable inside our  hooks components
 * 
 * add one more feature is user online or not with help of addEventListener("online",function), addEventListener("offline",function) always remember clean-up function and removeEventListener("online",handleOnline),removeEventListener("offline",handleOffline)
 * 
 * Home Work:- extract your Body Api fetching with help of custom hooks and create customHooks for this
 * 
 * make hooks for user online or Offline
 * build your own NPM Library
 * useOnline Hooks
 * use throttling for testing user online or offline
 * 
 * todo: HOw to optimizing your react hooks??
 * ans:-always write cleanup function this is senior developer thinks
 * always clean up your event listener
 * if your are not write cleanup function and not remove your addeventlistener then after your go next route then react always remember and always create new subsequent so always add cleanup function
 * try to make custom hooks:-
 * useAuth()
 * useLocalStorageHooks() 
 * now we are move to optimizing our code 
 * this is system design thinks:below
 - interviewer ask every time how can optimize our react app so give this ans:-
 * code splitting*
 * chunking
 * lazy loading
 * dynamic bundling
 * on demand loading
 * dynamic import
 * upload images to CDN
 * import your component inside lazy loading Suspense fallbackProps give Shimmer inside fallback props
 * if we have one file of 10 mb we break this chunk
 * always remember import remove older import then convert to lazy loading
 * and always invoke lazy loading in top level and out of component scope if you pass lazy loading inside your component
 * then this give a error and re-render every time so you don't do that got it
 * 
 *  * 
 * 
 
 */
