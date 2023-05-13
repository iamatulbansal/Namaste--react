import React, { useState, useEffect } from 'react';
import GalleryClassBaseChildComponent from './GalleryClassBaseChildComponent';

//Functional Components Write Here if You want But you Don't Do that
const GitProfile = ({ ...props }) => {
  const { name, bio, avatar_url, location, html_url, login } = props || {};

  //Earlier return
  if (!Object.keys(props).length) return <h1>GitHub Data Not Found</h1>;
  return (
    <div className="git-profile">
      <h1>{bio}</h1>
      <img src={avatar_url} />
      <h2>Name:-{name}</h2>
      <h2>Location:-{location}</h2>
      <h2>
        Git-Profile:-
        <a href={html_url} target="_blank">
          {login}
        </a>
      </h2>
      {/* <h1>{response?.state?.userInfo?.bio}</h1>
    <img src={response?.state?.userInfo?.avatar_url} />
    <h2>Name:-{response?.state?.userInfo?.name}</h2>
    <h2>Location:-{response?.state?.userInfo?.location}</h2>
    <h2>Git-Profile:-<a href={response?.state?.userInfo?.html_url} target='_blank'>{response?.state?.userInfo?.login}</a></h2> */}
    </div>
  );
};

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
    this.state = {
      userInfo: {},
    };
    console.log('Parent -Constructor...');
  }
  //WE PASS ASYNC HERE LIKE THIS BUT WE DO NOT PASS ASYNC INSIDE YOUR useEffect FIRST FUNCTION ARGUMENT AND READ ABOUT THIS
  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Timer")
    // }, 1000)
    //Todo:Remember This point So you know react is a single page application so at the end of the day react has follow single code so whenever you put timer inside then  this timer never end till application is close so this timer give slowDown our application performance So alway ways remember*** clearInterval every time with using ComponentWillUnmount unmounting face

    //HERE IS BEST PLACE FOR API CALL
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
    //componentDidMount only one time mount then if components is re-render then all time update not mount and functional components our components  always reload and mounting again and again
  }
  componentDidUpdate(prevProps, prevState) {
    //THIS IS LIKE DEPENDENCY ARRAY BUT DON'T COMPARE WITH USEEFFECT GOT IT
    if (
      this.state.count1 === prevState.count1 ||
      this.state.count1 === prevState.count1
    ) {
      // console.warn("count-Change")
      //Code here
    }
    if (this.state.userInfo === prevState.userInfo) {
      console.warn('count-Change');
      //Code Here
    }
    console.log('Parent -ComponentDidUpdate...');
  }
  componentWillUnmount() {
    // clearInterval(this.timer)
    //Todo:Alway write clean-Up this is important and read about more
    //Todo:Remember This point So you know react is a single page application so at the end of the day react has follow single code so whenever you put timer inside then  this timer never end till application is close so this timer give slowDown our application performance So alway ways remember*** clearInterval every time with using ComponentWillUnmount unmounting face
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
        <button //And this time to click this btn then called your
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
        <GitProfile {...this.state.userInfo} />
        <GalleryClassBaseChildComponent name={'first'} />
        <GalleryClassBaseChildComponent name={'second'} />
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
