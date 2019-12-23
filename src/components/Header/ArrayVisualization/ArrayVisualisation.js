import React, {Component} from 'react';
import ArrayBlockList from "./ArrayBlockList/ArrayBlockList";

class ArrayVisualisation extends Component {
    render(){
        return (
            <div>
                <ArrayBlockList data={this.props.data} />
            </div>
        )
    }
}

export default ArrayVisualisation;