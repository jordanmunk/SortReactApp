import React, { Component } from 'react';
import Auxiliary from "../Auxiliary/Auxiliary";
import classes from './Layout.module.css';
import Header from "../../components/Header/Header";

class Layout extends Component {
    render(){
        return (
            <Auxiliary>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;