import React, { Component } from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import ArrayVisualisation from "../../components/Header/ArrayVisualization/ArrayVisualisation";

class ArrayArea extends Component {
    state = {
        currentArrayLength: 0
    };

    render() {
        return(
        <Auxiliary>
        <Header/>
        <ArrayVisualisation />
        </Auxiliary>
        )
    };
};

export default ArrayArea;