import React from 'react';
import ArrayBlock from "./ArrayBlock/ArrayBlock";
import classes from "./ArrayBlockList.module.css";

const arrayBlockList = (props) => {
    return (
        <div className={classes.Content}>
            {props.data.map((item, index) => {
                return <ArrayBlock value={item} colors={props.colors} index={index} />
            })}
        </div>
    );
};

export default arrayBlockList;