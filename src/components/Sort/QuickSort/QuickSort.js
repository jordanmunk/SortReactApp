import React, {Component} from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class QuickSort extends Component {
    currentArray = [...this.props.items];
    leftIndex = 0;
    rightIndex =0;
    pivotIndex = 0;
    finishedSorting = false;

    changeLeftIndex(leftIndex){
        this.leftIndex = leftIndex;
        console.log("New leftIndex: " + this.leftIndex);
    }
    changeRightIndex(rightIndex){
        this.rightIndex = rightIndex;
        console.log("New rightIndex: " + this.rightIndex);
    }
    changePivotIndex(pivotIndex){
        this.pivotIndex = pivotIndex;
        console.log("New pivotIndex: " + this.pivotIndex);
    }
    changeCurrentArray(array){
        this.currentArray = [...array];
        console.log("New array");
        console.log(this.currentArray);
        this.props.changeArray(this.currentArray, false);
    }

    swap(items, leftIndex, rightIndex){
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        this.changeLeftIndex(leftIndex);
        items[rightIndex] = temp;
        this.changeRightIndex(rightIndex);
        this.changeCurrentArray(items);
    }

    partition(items, left, right) {
        let pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        this.changePivotIndex(Math.floor((right + left) / 2));

        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //swap two elements
                i++;
                j--;
            }
        }
        return i;
    }

    quickSort(items, left, right){
        let index;

        const self = this;
        setTimeout(function() {
        if(items.length > 1) {
            index = self.partition(items, left, right);

            if (left < index - 1) {
                self.quickSort(items, left, index - 1);
            }

            if (index < right) {
                self.quickSort(items, index, right);
            }
        }

        return items;
        }, 250);
    }

    sort(){
        const array = [...this.props.items];
        this.quickSort(array, 0, array.length - 1);
    }

    render() {
        this.sort();

        return(
            <Auxiliary>
                <div onLoad={this.props.changeArray(this.currentArray)}> </div>
            </Auxiliary>
        );
    }
}

export default QuickSort;


