import React, {Component} from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class SelectionSort extends Component {
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

    async swap(items, leftIndex, rightIndex){
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        await this.changeLeftIndex(rightIndex);
        items[rightIndex] = temp;
        await this.changeRightIndex(leftIndex);

        await this.changeCurrentArray(items);
    }

    async selectionSort(array){
        let len = array.length,
            min;

        for(let i = 0; i < len; i++){
            //Set minimum to this position
            min = i;
            await this.changeLeftIndex(min);

            //check the rest of the array to see if anything is smaller
            for(let j = i + 1; j < len; j++){
                await this.changeRightIndex(j);
                if(array[j] < array[min]){
                    min = j;
                }
            }

            if(i !== min){
                await this.swap(array, i, min);
            }
        }

        await this.changeCurrentArray(array);

        return array;
    }


    render() {
        let array = [...this.props.items];
        let result = this.selectionSort(array);
        console.log(result);

        return(
            <Auxiliary>
                <div onLoad={this.props.changeArray(this.currentArray)}> </div>
            </Auxiliary>
        );
    }
}

export default SelectionSort;


