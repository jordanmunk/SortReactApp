import React from 'react';

const sorting = (props) => (
    <div>
        <label>Sort:</label>
        <select onChange={props.changeSelectedSort} value={props.selectedSort}>
            {props.sortListOptions.map(item => {
                return <option value={item}>{item}</option>
            })}
        </select><br/>
        <label>Delay:</label>
        <input type="text" value={props.delay} onChange={props.changeDelay}/><br/>
        <button onClick={props.sortList}>SORT</button><br/><br/>
    </div>
);

export default sorting;