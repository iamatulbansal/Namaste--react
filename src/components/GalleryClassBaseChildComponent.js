import React from 'react';

class GalleryClassBaseChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + '-Child -constructor');
  }

  componentDidMount() {
    console.log(this.props.name + '-Child -ComponentDidMount');
  }
  componentDidUpdate() {
    console.log(this.props.name + '-Child -ComponentDidUpdate...');
  }
  render() {
    console.log(this.props.name + '-Child -Render');
    return (
      <div>
        <h2>{this.props.name}-Child component</h2>
        <h2></h2>
      </div>
    );
  }
}

export default GalleryClassBaseChildComponent;
