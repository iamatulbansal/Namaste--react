
import React from "react";

class GalleryClassBaseChildComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('Child -constructor');
    }

    componentDidMount() {
        console.log('Child -ComponentDidMount');
    }

    render() {
        console.log('Child -Render');
        return <div>
            <h2>Child component</h2>
        </div>
    }
}

export default GalleryClassBaseChildComponent
