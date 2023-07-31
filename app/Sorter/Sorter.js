'use client'

import React from 'react';
import './Sorter.css';

export default function Sorter() {
    const [array, setArray] = React.useState([]);
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)

    React.useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    function updateArray(width, height) {
        setArray(generateRandomNumbers((width - 200) / 4, 5, height - 300));
    }

    function handleWindowResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        updateArray(window.innerWidth, window.innerHeight);
    }

    return (
        <div className="array-container">
            {array.map((value, index) =>
            (
                <div
                    className="array-bar"
                    key={index}
                    style={{ height: `${value}px` }}></div>
            ))}

            <button className='button' onClick={() => updateArray(width, height)}>Generate a New Array</button>
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



