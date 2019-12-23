import React, { Component } from 'react';
import ArrayGenerator from "./ArrayGenerator/ArrayGenerator";
import Sorting from "./Sorting/Sorting";

class Header extends Component {
    render() {
        return (
        <header>
            <ArrayGenerator
                lengthArray={this.props.lengthArray}
                changeArray={this.props.changeArray}
            />
            <Sorting
                sortListOptions={this.props.sortListOptions}
                selectedSort={this.props.selectedSort}
                changeSelectedSort={this.props.changeSelectedSort}
                sortList={this.props.sortList}
            />
        </header>
        );
    }
}

export default Header;