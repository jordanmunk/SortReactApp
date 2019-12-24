import React, {Component} from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class MergeSort extends Component {
    currentArray = [...this.props.items];

    async changeLeftIndex(leftIndex){
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, this.props.delay)
        );

        await this.props.changeColors(leftIndex, "green");
    }
    async changeRightIndex(rightIndex){
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, this.props.delay)
        );

        await this.props.changeColors(rightIndex, "red");
    }

    changeCurrentArray(array){
        this.currentArray = [...array];
        this.props.changeArray(this.currentArray);
    }

    // Merge the two arrays: left and right
    merge (left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        // We will concatenate values into the resultArray in order
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
        }

        // We need to concat here because there will be one element remaining
        // from either left OR the right
        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }


    // Merge Sort Implementation (Recursion)
    mergeSort (unsortedArray) {
        // No need to sort the array if the array only has one element or empty
        if (unsortedArray.length <= 1) {
            return unsortedArray;
        }
        // In order to divide the array in half, we need to figure out the middle
        const middle = Math.floor(unsortedArray.length / 2);

        // This is where we will be dividing the array into left and right
        const left = unsortedArray.slice(0, middle);
        const right = unsortedArray.slice(middle);

        // Using recursion to combine the left and right
        return this.merge(
            this.mergeSort(left), this.mergeSort(right)
        );
    }


    render() {
        let array = [...this.props.items];
        let result = this.mergeSort(array);

        return(
            <Auxiliary>
                <div onLoad={this.props.changeArray(this.currentArray)}> </div>
            </Auxiliary>
        );
    }
}

export default MergeSort;


