'use client'

import React from 'react';
import './Sorter.css';

const NUMBER_OF_ARRAY_BARS = 300;

export default function Sorter() {
    const [array, setArray] = React.useState([]);

    React.useEffect(() => {
        updateArray()
    }, [])

    function updateArray() {
        setArray(generateRandomNumbers(NUMBER_OF_ARRAY_BARS, 5, 600));
    }

    return (
        <div className="array-container">
            {array.map((value, index) =>
            (
                <div className="array-bar" key={index}>
                    {value}
                </div>
            ))}

            <button onClick={() => updateArray()}>Generate New Array</button>
        </div>


    );

}



function generateRandomNumbers(count, max, min) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // Generate a random number between 0 and 99
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}



