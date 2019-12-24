import React, {Component} from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class BubbleSort extends Component {
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
        items[rightIndex] = temp;

        await this.changeCurrentArray(items);
    }

    async bubbleSort(array){
        let swapped;

        await this.changeLeftIndex(0);
        await this.changeRightIndex(1);

        do {
            swapped = false;
            for(let i = 0; i < array.length; i++){
                await this.changeLeftIndex(i);
                await this.changeRightIndex(i + 1);
                if (array[i] > array[i + 1]) {
                    await this.swap(array, i, i + 1);
                    swapped = true;
                }
            }
        } while(swapped);

        await this.changeCurrentArray(array);

        return array;
    }


    render() {
        let array = [...this.props.items];
        let result = this.bubbleSort(array);
        console.log(result);

        return(
            <Auxiliary>
                <div onLoad={this.props.changeArray(this.currentArray)}> </div>
            </Auxiliary>
        );
    }
}

export default BubbleSort;


