import React from 'react';
import GalleryClassBaseChildComponent from './GalleryClassBaseChildComponent';
class GalleryClassBaseComponents extends React.Component {
  constructor(props) {
    //Every Render our contractor function will called
    super(props); //this Supper method inherit form React.Components  Read more about OPP concept's For better knows
    //Todo:https://www.w3schools.com/jsref/jsref_class_super.asp read more about super class

    //We Will Create State like this
    this.state = {
      count1: 0,
      count2: 2,
    };
    console.log('Parent -Constructor...');
  }
  componentDidMount() {
    //HERE IS BEST PLACE FOR API CALL

    this.timer = setInterval(() => {
      console.log("Timer")
    }, 1000)
    //Todo:Remember This point So you know react is a single page application so at the end of the day react has follow single code so whenever you put timer inside then  this timer never end till application is close so this timer give slowDown our application performance So alway ways remember*** clearInterval every time with using ComponentWillUnmount unmounting face 

    console.log('Parent -ComponentDidMount...');
    //componentDidMount only one time mount then if components is re-render then all time update not mount and functional components our components  always reload and mounting again and again
  }
  componentDidUpdate() {


    
    console.log('Parent -ComponentDidUpdate...');
  }
  componentWillUnmount() {
    clearInterval(this.timer)//Todo:Alway write clean-Up this is important and read about more
      //Todo:Remember This point So you know react is a single page application so at the end of the day react has follow single code so whenever you put timer inside then  this timer never end till application is close so this timer give slowDown our application performance So alway ways remember*** clearInterval every time with using ComponentWillUnmount unmounting face 
    console.log("Parent -ComponentWillUnmount")
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
        <button //And this time to click this btn then your  
          /***
             parent render
             first-child render
             second-child render
            
            */
          onClick={() => {
            this.setState({
              count1: 1,
              //So here is one more point when we update our object of state value then only particular value are changed like patch method
            });
          }}
        >
          CountUpdate
        </button>
        <GalleryClassBaseChildComponent name={"first"} />
        <GalleryClassBaseChildComponent name={"second"} />
        {/*** 
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
          */}
      </div>
    );
  }
}
export default GalleryClassBaseComponents;
/* 
Parent -Constructor...
Parent -Render...
Child -constructor
Child -Render
Child -ComponentDidMount
Parent -ComponentDidMount...
your class base components lifecycle call like this 
*/