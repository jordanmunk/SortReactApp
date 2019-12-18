import React, { Component } from 'react';
import Block from "./Block/Block";
import classes from "./ArrayBlock.module.css";

class ArrayBlock extends Component {
    render(){
        return (
        <div className={classes.ArrayBlock}>
            {[...Array(this.props.value)].map(() => <Block /> )}
        </div>
        )
    }
}

export default ArrayBlock;