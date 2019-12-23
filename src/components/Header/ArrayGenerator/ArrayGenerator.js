import React from 'react';
import classes from './ArrayGenerator.module.css';

const arrayGenerator = (props) => (
    <div>
        <label className={classes.Bold}>Generate Array:</label>
        <input type="range" min="2" max="100" value={props.lengthArray} onChange={props.changeArray} />
    </div>
);

export default arrayGenerator;