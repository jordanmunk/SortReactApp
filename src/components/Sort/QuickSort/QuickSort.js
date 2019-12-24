import React, {Component} from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class QuickSort extends Component {
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
    async changePivotIndex(pivotIndex){
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, this.props.delay)
        );

        await this.props.changeColors(pivotIndex, "yellow");
    }
    changeCurrentArray(array){
        this.currentArray = [...array];
        this.props.changeArray(this.currentArray);
    }

    swap(items, leftIndex, rightIndex){
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        this.changeCurrentArray(items);
    }

    async partition(items, left, right) {
        let pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right, //right pointer
            self    = this;

        await self.changePivotIndex(Math.floor((right + left) / 2));
        await self.changeLeftIndex(i);
        await self.changeRightIndex(j);

        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, this.props.delay)
        );

        while (i <= j) {
            while (items[i] < pivot) {
                i++;
                await self.changeLeftIndex(i);
            }
            while (items[j] > pivot) {
                j--;
                await self.changeRightIndex(j);
            }
            if (i <= j) {
                self.swap(items, i, j); //swap two elements
                i++;
                j--;
                await self.changeLeftIndex(i);
                await self.changeRightIndex(j);
            }
        }

        return i;
    }

    async quickSort(items, left, right){
        let index;

        const self = this;
        if(items.length > 1) {
            index = await self.partition(items, left, right);

            if (left < index - 1) {
                await self.quickSort(items, left, index - 1);
            }

            if (index < right) {
                await self.quickSort(items, index, right);
            }
        }

        return items;
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


