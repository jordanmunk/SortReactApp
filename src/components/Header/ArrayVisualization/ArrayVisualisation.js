import React, {Component} from 'react';
import ArrayBlockList from "./ArrayBlockList/ArrayBlockList";

class ArrayVisualisation extends Component {
    render(){
        const data = [4, 2, 6, 12, 3, 19];
        return (
            <div>
                <ArrayBlockList data={data} />
            </div>
        )
    }
}

export default ArrayVisualisation;