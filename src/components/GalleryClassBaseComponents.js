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
    console.log('Parent -ComponentDidMount...');
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
              //So here is one more point when we update our object of state value then only particular value are changed like patch method
            });
          }}
        >
          CountUpdate
        </button>
        <GalleryClassBaseChildComponent />
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