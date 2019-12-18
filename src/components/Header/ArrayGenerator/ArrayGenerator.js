import React from 'react';
import classes from './ArrayGenerator.module.css';

const arrayGenerator = (props) => (
    <div>
        <label className={classes.Bold}>Generate Array:</label>
        <input type="range" min="2" max="1000" value="50" />
    </div>
);

export default arrayGenerator;