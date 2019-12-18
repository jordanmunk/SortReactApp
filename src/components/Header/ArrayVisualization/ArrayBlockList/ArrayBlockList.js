import React from 'react';
import ArrayBlock from "./ArrayBlock/ArrayBlock";
import classes from "./ArrayBlockList.module.css";

const arrayBlockList = (props) => {
    return (
        <div className={classes.Content}>
            {props.data.map(item => {
                return <ArrayBlock value={item} />
            })}
        </div>
    );
};

export default arrayBlockList;