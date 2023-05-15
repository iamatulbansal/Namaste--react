# Namaste-React-project

/\*\*\*

- \*PARCEL-BUNDLER
- CREATE-LIVE-SERVER
- HMR-HOT MODULE REPLACEMENT
- FILE WATCHER ALGORITHM
- SETUP YOUR APP WITH BABEL PLUGIN TO (.babelrc) AUTOMATIC CLEAR CONSOLE.LOG
- CONSISTENT HASHING ALGORITHM
- FILE MINIFY
- HTTPS ON DEVELOPMENT ENVIRONMENT USING NPX PARCEL INDEX.HTML --HTTPS
- TRANSITIVE DEPENDENCIES
- AUTOMATIC PIC-UP PORT NUMBER
- OLDER BROWSERS VERSION SUPPORTS
- COMPRESSION
- IMAGE OPTIMIZATION AUTOMATICALLY
- CACHING WHILE DEVELOPMENT
- SUPER FAST BUILD ALGORITHM
- ZERO CONFIG
- TREE SHAKING - REMOVING UN-WANTED CODE
-
- \*OTHER IMPORTANT NOTE
- USE YOUR INDEX.HTML FILE IN THE START AND BUILD COMMAND IN YOUR STARTER SCRIPT
- REMOVE {main:"App.js"} <<< remove this line from package.json while using parcel
- ADD type="module" <<<ADD INSIDE YOUR SCRIPT TAG IN INDEX.HTML FILE
-
- \*OTHER IMPORTANT NOTE
- ^2.8.2 THIS SIGN USE FOR AUTOMATIC VERSION UPDATE
- ~2.8.2 THIS SIGN USE FOR PATCH UPDATE
- 2.8.2 NOT ANY SING THEN YOUR PROJECT WORKING ONLY SPECIFIC VERSION
- PUSH YOUR PACKAGE-LOCK.JSON FILE TO YOUR GIT REPO SO WHEN WE DEPLOY YOUR APP THEN SERVER KNOW HWT VERSION DO YOU USE IN YOUR PROJECT DON'T DELETE YOUR PACKAGE-LOCK.JSON
-
-
- \*OTHER IMPORTANT NOTE
- READ ABOUT REACT RECONCILIATION
- READ ABOUT The Diffing Algorithm
- HOW IT WORKS IN REACT>>>>React.createElement => Object =>HTML(DOM)
-
- CREATING BIG HTML STRUCTURE LIKE THIS BUT THIS IS NOT Relevant TO BIG APPLICATION SO WE MOVE TO WRITE YOUR CODE WITH HELP OF JSX

- Components always write your Components using PascalCase

- In React(Native/JS) world you must name your component in PascalCase, PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized. Software developers often use PascalCase when writing source code to name functions, classes, and other objects. PascalCase is similar to camelCase, except the first letter in PascalCase is always Capitalized.js

- React 2 Type of Components
- functional - i Will use this most of the time
- Class Based Components -OLD

import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="container">Heading</h1>//This is React element we can use like this (heading)
console.log(heading);
\*Functional components is a like a normal function ,this is return jsx element alway write your component name using first Capital latter
const HeadingComponent = () => {//This is a react components we can use like this <HeadingComponent/>
return (<div>

<h1>Namaste React Functional components</h1>
<h2>This is a Heading 2</h2>
</div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
PASSING REACT ELEMENT INSIDE YOUR ROOT
root.render(heading); //*This is React element we can use like this (heading)
root.render(<HeadingComponent />);//\*This is a react components we can use like this <HeadingComponent/>

What is react element -
ans-Object
What is react components -
ans-function

\*WHEN WE PUT ONE COMPONENT INSIDE ANOTHER COMPONENT , WE CALL IT COMPONENT COMPOSITION.

/\*\*

- \*Day-4-classes
- todo:When you create a project or webApp First Do proper planning and structure layout .
- \*AppLayout-planning
- Header-
-       - logo
-       - nav items(right side)
-       - cart (right side)
- Body-
-      -search-bar
-      -RestaurantList
-       -RestaurantCard
-        -image
-        -name
-        -rating
-        -cuisines
-
- Footer-
-        -Link
-        -Copyright
-
-
-
- \*when we use multi element inside our components then must be wrap up inside single element JSX expressions must have one parent element
-
- \*React.Fragment is a Component come from React core library or come from react node_modules
-
- Todo:---->Config Driven UI
- \*Dynamic UI
- \*Control UI using Data.config.json file
-
-
- \*Props is a Properties
- \*VIRTUAL DOM
- \*RECONCILIATION ALGORITHM
- \*REACT.FIBER-LEARN MORE THIS IS A NEW ALGORITHMS IN REACT >16 TO RECONCILIATION FASTER
- \*ALWAYS USE UNIQUE KEY IN OUR ELEMENT NOT USING INDEXES AS A KEY
-
-

/\*\*\*

- Day-5 classes
- \*ALWAYS PUT YOUR HARD CODDED STRING AND DATA INSIDE YOUR CONFIG.JS OR CONSTANT.JS THIS IS A GOOD PRACTICE AND MANY PEOPLE USE CONSTANT.JS FILE FOR OTHER OTHER WAY LIKE TESTING AND PRODUCTION
- \*WE ARE GOING TO CREATE RESTAURANT CARD
- \*WE ARE GOING TO GET PREPARE/CREATE RESTAURANT CARD DATA
- \*CONFIG DRIVEN UI

- - NOTE NOT SENDING ALL DATA TO OTHER COMPONENTS ONLY SEND THE USABLE DATA MAKE YOUR COMPONENTS LIGHTER SO YOUR APP IS WORKING FASTER
- IMPORT-SECTION-CODE
  DEFAULT IMPORT-IT SHOULD BE A SINGLE EXPORT DEFAULT COMPONENT
  *import Header from "./components/Header";
  NAME IMPORT-THIS IS NOT A OBJECT DESTRUCTURING
  *import { Header } from "./components/Header";
  ALL EXPORT COMPONENTS/FUNCTION :-SUPPOSE WE HAVE MULTIPLE COMPONENTS IN THE SAME FILE WE CAN USE/IMPORT LIKE THIS DYNAMIC IMPORT, BUT MAKE SURE YOUR ALL COMPONENTS IS NAME EXPORT IN OUR FILE THEN YOUR IMPORT LIKE THAT
  _import _ as controller from "./components/Header";

import obj from "./components/Header";
const {Header}=objWHEN YOU WRITE CODE LIKE THIS SO THAT IS NOT OBJECT DESTRUCTURING IT GIVE AND ERROR

\*ERROR IS:-caught TypeError: Cannot destructure property 'Header' of '(0 , \_headerDefault.default)' as it is undefined.

*Difference between One-way Binding and Two-way Binding
*ans-One way binding:
In one-way binding, the data flow is one-directional.
This means that the flow of code is from typescript file to Html file.
In order to achieve a one-way binding, we used the property binding concept in Angular.
In property binding, we encapsulate the variable in Html with square brackets( [ ] ).
We will understand this concept through an example in order to make it more comprehensible.
\*Two-way binding:
In a two-way binding, the data flow is bi-directional.
This means that the flow of code is from ts file to Html file as well as from Html file to ts file.
In order to achieve a two-way binding, we will use ngModel or banana in a box syntax.
To make sure the app doesn’t break, we need to import ‘FormsModule’ from ‘@angular/forms.
Any changes to the view are propagated to the component class. Also, any changes to the properties in the component class are reflected in the view.
To bind two properties in order to two-way binding works, declare the ngModel directive and set it equal to the name of the property.
We will understand the concept through an example in order to make it more comprehensible.

one-way binding:-- learn more
https://www.telerik.com/blogs/how-to-bind-any-component-data-react-one-way-binding#:~:text=One%2Dway%20binding%3A%20this%20is,provider)%20automatically%20update%20the%20other.

*FIRST APPROACH-BUT THIS IS NOT WORK PERFECT BECAUSE THIS LOGIC NEED PROPER CARD STRING WE NEED ONLY FEW WORD TO SEARCH CARD
function searchFilter(searchTexts, restaurants) {
const searchResult = restaurants.filter(
(restaurant) => restaurant.data.name === "Chopstick"
);
console.log(searchResult);
}
const searchText = "XYZ"; React don't track variable like this react don't know where is variable is updated so we will use state variable to keep track and sync our local state variable in React so react perform reconciliation process
*and React have a 1 way data binding when we change something using state then and your js file and state inside our react and react is very smart react use diff algorithm compare one dom tree to another dom tree using diff algorithm and react have a proper key each element then react check where exactly change so react reloading component then change only react knows where is value actually change so react update particular element

\*one way data bing is like we don't change directs html to js we only change js to html thats why react has one-directional data binding
create local variable using useState
this is react state variable come from react library
And every React component have own lifecycle state
We will update your state using setState function/method

_We will update your data using onChange method to update setState function then state state provide a updated state in our state variable
_ we don't update variable like this in react this is a javascript metrology
searchText=e.target.value

\*ALWAYS PUT EXPORT DEFAULT AND ALWAYS WRITE ONE-SEPARATE COMPONENTS IN ONE FILE THIS IS A GOOD PRACTICE

 <h4>Day-6</h4>
 * microservices-done
 * monolith -done
 * fetch api call -done
 * search button lowercase-done
 * useEffect lifecycle method using hooks -done
 * create login and logout btn -done
 * fetch api Data using this  link https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING -done
 * 
 * cover conditional rendering   inside our react curly breaches -done
 * explore some  js expression and statement-done
 * create our simmer layout-done
 * Earlier return 
 * 
 * 
 * 
  **note some point here when our components is render then my useState variable value is initial value
   *then when my components is fully render that time instant my useState() value is updated using useEffect()
   *
   *
   * todo: useEffect()-> lifeCycle process
   * componentDidMount-initial render is called that time to mounting face in showing our ui in the Dom window
   * componentDidUpdate- this is called initial render then after whenever my local variable state is updated then my components updated
   * componentWillUnMount-this is call when my components is rendered in the dom that time to components lifecycle is ended
   *
   *
   *
todo:Homework
-FIRST CHECK ALL RESTAURANTS >>
 -SHOW THE SIMMER UI >>>
 -THEN YOU DO FILTER RESTAURANT >>>
 -THEN FILTER RESTAURANT NOT THERE >>
 -THEN NOT FOUND MESSAGE IS SHOW IN THE UI 
 -Done

WHEN YOU DOING CONDITIONAL RENDERING THEN WE FACE SOME ERROR LENGTH IS UNDEFINED THEN YOU PASS THIS SIGN "?" OPTIONAL CHAINING
WRITE YOUR LOGIC FOR SIMMER UI

SUPPOSE YOUR FILTER CARD NOT MATCH IN YOUR SEARCH TEXT THEN YOU SHOWING NOT FOUND CARDS LIKE THIS
if (filteredRestaurants?.length === 0 && !filteredRestaurants)
return <p>We Don't Have any restaurant</p>;
console.log("render"); //every time my component is re-render then this is called

\*WHAT IS CONDITIONAL RENDERING
IF RESTAURANTS IS EMPTY => SHOWING SIMMER UI
IF RESTAURANTS HAS DATA => SHOWING ACTUAL UI
NOT RENDER COMPONENTS THIS IS CALLED EARLIER RETURN
let render="Render"//You are not doing this
console.log(render)
console.log("Render")//We are doing this and this is a expression

          ((a = 10), console.log(a))//this is a expression

            ((if(true){
            console.log("if")
          }else{
            console.log("else")
          }))
         We are not doing this  but but we have a alternative of this a alter native  is a ternary operates
         this is a (true/condition)? true:false;

-
- <h2>Day-7</h2>

- Todo:-->
- React-router-don for routing
- useParams for get id from url
- useRouterError() hooks for page not found
- create Error component
- use createBrowserRouter for creating path config
- pass RouterProvider in side our root.render() method
- pass one router props inside our RouterProvider components
- SSR-server side rendering
- CSR-client side rendering
- SPA-single page application
- use assets folder to contain all images and logos related to our project
- if you optimizing your application performance then put your images in CDN cloud-hosting platform then fetch and use inside your project this is a best way
- don't put your useSate hooks and other hooks outside of your components this is throw Error
  \*Don't use unnecessary npm packages and read about all documentation of npm then put inside your project
  and use some important npm library for form or validation like formik and yup
-
-
- Read more on Nested Routing dynamic routing segment routing and read about loader
- Outlat-for access nested children path read and practice more about this
-
- Read about javascript Object read about lodash
- Read about javascript Array all method
- Todo:Most important Thing
  *Note-Router root path starting from / like this to="/profile"
  *Router parent relative path starting from '' like this to="profile"

-
- -<h2>Day-8</h2>
-
- NEED OUTLAT-components-from react router dom TO ACCESS OUR ALL NESTED CHILDREN
- if you pass your path starting / then this is give error and this is attach to root path so every time put path without '/' Got it.we pass relative/nested path using like this "profile" and access child route using Outlet component we always put Outlet inside your parent components
-
-
- if you not clear this time out then this time out slow down your application performance
- This is fire one time componentDidMount
- this is fire after componentWillUnmount

if you pass your path starting / then this is give error and this is attach to root path so every time put path without '/' Got it.we pass relative/nested path using like this "profile" and access child route using Outlet component we always put Outlet inside your parent components



componentDidMount only one time mount then if components is re-render then all time update not mount and functional components our components  always reload and mounting again and again


 So here is one more point when we update our object of state value then only particular value are changed like patch method


 <h1>{response?.state?.userInfo?.bio}</h1>
    <img src={response?.state?.userInfo?.avatar_url} />
    <h2>Name:-{response?.state?.userInfo?.name}</h2>
    <h2>Location:-{response?.state?.userInfo?.location}</h2>
    <h2>Git-Profile:-<a href={response?.state?.userInfo?.html_url} target='_blank'>{response?.state?.userInfo?.login}</a></h2> 
Functional Components Write Here if You want But you Don't Do that
practice with lifecycle method running:-
And this time to click this btn then called run your components like this
      
             -parent render
             -first-child render
             -second-child render
            
           
*Parent -Constructor...
*Parent -Render...
*Child -constructor
*Child -Render
*Child -ComponentDidMount
*Parent -ComponentDidMount...
*your class base components lifecycle call like this 



         * if we hve multiple sibling components then life cycle work like this
         *
         * //Dom Render face
         * parent constructor
         * parent render
         * first-child constructor
         * first-child render
         * second-child constructor
         * second-child render
         *
         *
         * //DOM Commit Face
         * first-child componentDidMount
         * second-child componentDidMount
         * Parent componentDidMount
         *
         *
         *
         *
         *
         *
         
<code>

class GalleryClassBaseComponents extends React.Component {
  constructor(props) {
    Every Render our contractor function will called
    super(props); this Supper method inherit form React.Components  Read more about OPP concept's For better knows
    Todo:https://www.w3schools.com/jsref/jsref_class_super.asp read more about super class

    We Will Create State like this
    this.state = {
      count1: 0,
      count2: 2,
    };
    this.state = {
      userInfo: {},
    };
    console.log('Parent -Constructor...');
  }
  WE PASS ASYNC HERE LIKE THIS BUT WE DO NOT PASS ASYNC INSIDE YOUR useEffect FIRST FUNCTION ARGUMENT AND READ ABOUT THIS
  async componentDidMount() {
     this.timer = setInterval(() => {
       console.log("Timer")
     }, 1000)
    Todo:Remember This point So you know react is a single page application so at the end of the day react has follow single code so whenever you put timer inside then  this timer never end till application is close so this timer give slowDown our application performance So alway ways remember*** clearInterval every time with using ComponentWillUnmount unmounting face

    HERE IS BEST PLACE FOR API CALL
    try {
      const response = await fetch(
        'https://api.github.com/users/iamatulbansal'
      );
      const json = await response.json();
      console.log(json);
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.log(error);
    }

    console.log('Parent -ComponentDidMount...');
  }
  componentDidUpdate(prevProps, prevState) {
    THIS IS LIKE DEPENDENCY ARRAY BUT DON'T COMPARE WITH USEEFFECT GOT IT
    if (
      this.state.count1 === prevState.count1 ||
      this.state.count1 === prevState.count1
    ) {
       console.warn("count-Change")
      Code here
    }
    if (this.state.userInfo === prevState.userInfo) {
      console.warn('count-Change');
      Code Here
    }
    console.log('Parent -ComponentDidUpdate...');
  }
  componentWillUnmount() {
     clearInterval(this.timer)
    Todo:Alway write clean-Up this is important and read about more
    Todo:Remember This point So you know react is a single page application so at the end of the day react has follow single code so whenever you put timer inside then  this timer never end till application is close so this timer give slowDown our application performance So alway ways remember*** clearInterval every time with using ComponentWillUnmount unmounting face
    console.log('Parent -ComponentWillUnmount');
    console.log('cleaned up');
  }
  render() {
    console.log('Parent -Render...');
    const { count1, count2 } = this.state; //we can destructure our state like this
    return (
      <div>
        <h1>Gallery Class Base Components</h1>
        <h2>Name:"Atul Bansal"</h2>
        <h2>Count1:{count1}</h2>
        <h2>Count2:{count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: 1,
            });
          }}
        >
          CountUpdate
        </button>
        <GitProfile {...this.state.userInfo} />
        <GalleryClassBaseChildComponent name={'first'} />
        <GalleryClassBaseChildComponent name={'second'} />
      </div>
    );
  }
}
export default GalleryClassBaseComponents;
<code>

<h2>Day-9</h2>

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
*we need function
*we need react state
*isOnline and is Offline status
*build logic for user is on line or offline
*we need return statement
   todo:if you pass your path starting / then this is give error and this is attach to root path so every time put path without '/' Got it.we pass relative/nested path using like this "profile" and access child route using Outlet component we always put Outlet inside your parent components
*Note-Router root path starting from / like this to="/profile"
*Router parent relative path starting from ''  like this to="profile"
*NEED OUTLET-components-from react router dom TO ACCESS OUR ALL NESTED CHILDREN
\*/
