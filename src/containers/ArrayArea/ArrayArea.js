import React, { Component } from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import ArrayVisualisation from "../../components/Header/ArrayVisualization/ArrayVisualisation";
import QuickSort from "../../components/Sort/QuickSort/QuickSort";

class ArrayArea extends Component {
    state = {
        currentArrayLength: 0,
        randomizedArray: [3, 5, 2, 4, 1],
        sortListOptions: ["QuickSort", "BubbleSort"],
        selectedSort: "QuickSort",
        sortingMethod: null
    };

    changeValueHandler = (event) => {
        this.setState({currentArrayLength: event.target.value});
        this.setState({randomizedArray: Array.from({length: this.state.currentArrayLength}, () => Math.floor(Math.random() * this.state.currentArrayLength))});
    };

    changeArrayHandler = (array, unmount) => {
        this.setState({randomizedArray:array});
    };

    changeSelectedSortHandler = (event) => {
        this.setState({selectedSort: event.target.value});
    };

    sortListHandler = () => {
        switch(this.state.selectedSort){
            default:
                break;
            case "QuickSort":
                this.setState({sortingMethod: <QuickSort items={this.state.randomizedArray}
                                                         changeArray={this.changeArrayHandler} />});
                this.setState({sorting: true});
                break;
            case "BubbleSort":
                break;
        }
    };

    render() {
        return(
        <Auxiliary>
        <Header
        lengthArray={this.state.currentArrayLength}
        changeArray={this.changeValueHandler}
        sortListOptions={this.state.sortListOptions}
        selectedSort={this.state.selectedSort}
        changeSelectedSort={this.changeSelectedSortHandler}
        sortList={this.sortListHandler}
        />
        <ArrayVisualisation
        data={this.state.randomizedArray}
        />
        {(this.state.sorting) ? this.state.sortingMethod : ''}
        </Auxiliary>
        )
    };
};

export default ArrayArea;