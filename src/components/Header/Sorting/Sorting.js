import React from 'react';

const sorting = (props) => (
    <div>
        <select onChange={props.changeSelectedSort} value={props.selectedSort}>
            {props.sortListOptions.map(item => {
                return <option value={item}>{item}</option>
            })}
        </select>
        <button onClick={props.sortList}>SORT</button>
    </div>
);

export default sorting;