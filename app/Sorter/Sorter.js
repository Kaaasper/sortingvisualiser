'use client'

import React from 'react';

const NUMBER_OF_ARRAY_BARS = 300;

export default function Sorter() {
    const [array, setArray] = React.useState(resetArray());


    function resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        return array;
    }
    function updateArray() {
        setArray(resetArray());
    }

    console.info(array)

    return (
        <>
            {array.map((value, index) =>
            (
                <div className="array-bar" key={index}>
                    {value}
                </div>
            ))}
        </>

    );

}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

