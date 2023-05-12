import React from 'react';

class GalleryClassBaseComponents extends React.Component {
  constructor(props) {
    //Every Render our contractor function will called
    super(props); //this Supper method inherit form React.Components  Read more about OPP concept's For better knows

    //We Will Create State like this
    this.state = {
      count1: 0,
      count2: 2,
    };
  }

  render() {
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
      </div>
    );
  }
}
export default GalleryClassBaseComponents;
