import React from 'react';
import UserContext from '../userContext';

class GalleryClassBaseChildComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + '-Child -constructor');
  }

  componentDidMount() {
    // console.log(this.props.name + '-Child -ComponentDidMount');
  }
  componentDidUpdate() {
    // console.log(this.props.name + '-Child -ComponentDidUpdate...');
  }
  render() {
    // console.log(this.props.name + '-Child -Render');
    return (
      <div>
        <h2>{this.props.name}-Child component</h2>
        <h2>Context APi</h2>
        <UserContext.Consumer>
          {(value) => <h1 className='text-red-500 font-bold'>{value.user.name} <span className='text-slate-500'> {"<<"}This name Data Come From userContext in class base components  </span></h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default GalleryClassBaseChildComponent;
