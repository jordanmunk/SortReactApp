import React from 'react';
import classes from './Block.module.css';

const block = (props) => {
    let currentColor = null;
    let color = "";
    if(props.colors !== null) {
        Object.keys(props.colors).forEach(function (key) {
            if(props.index === props.colors[key]){
                currentColor = key;
            }
        });
    }

    switch(currentColor){
        default:
            break;
        case "yellow":
            color = classes.Yellow;
            break;
        case "red":
            color = classes.Red;
            break;
        case "green":
            color = classes.Green;
            break;
        case "blue":
            color = classes.Blue;
            break;
    }

    return (
        <div className={[classes.Block, color].join(" ")}>

        </div>
    );
};

export default block;