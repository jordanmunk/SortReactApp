import React from 'react';
import ArrayGenerator from "./ArrayGenerator/ArrayGenerator";
import Sorting from "./Sorting/Sorting";

const header = (props) => (
    <header>
        <ArrayGenerator />
        <Sorting />
    </header>
);

export default header;