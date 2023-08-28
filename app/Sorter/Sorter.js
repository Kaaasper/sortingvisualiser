'use client'

import React from 'react';
import ReactDOM from 'react-dom';
import './Sorter.css';
import { getAnimations } from './sortingAlgorithms';

export default function Sorter() {
    const [array, setArray] = React.useState([]);
    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
    let resizeTimeout;

    React.useEffect(() => {
        // component is mounted and window is available
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    function updateArray(width, height) {
        // Clear all timeouts, stopping the animation
        const highestId = window.setTimeout(() => {
            for (let i = highestId; i >= 0; i--) {
                window.clearInterval(i);
            }
        }, 0);

        // Number of bars are set based on the width of the screen. 200px subtracted for margins, and each bar is 4 pixels.
        setArray(generateRandomNumbers((width - 200) / 4, 5, height - 300));

        // Turn all bars back to the default color
        const bars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < bars.length; i++) { bars[i].style.backgroundColor = 'blue'; console.log(bars[i].style.backgroundColor); }
    }

    function handleWindowResize() {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            updateArray(window.innerWidth, window.innerHeight);
        }, 50);
    }

    function quicksort(array) {
        let delay = 0;
        const bars = document.getElementsByClassName('array-bar');
        const animations = getAnimations(array)
        for (let i = 0; i < animations.length; i++) {

            const [index1, index2, type, value1, value2] = animations[i]
            if (type == 'comparison') {
                setTimeout(() => {
                    bars[index1].style.backgroundColor = 'red';
                    bars[index2].style.backgroundColor = 'red';
                }, i * 5 + delay);
            } else if (type == 'swap') {
                delay = delay + 50
                setTimeout(() => {
                    for (let i = 0; i < bars.length; i++) { bars[i].style.backgroundColor = 'blue' }
                    bars[index1].style.backgroundColor = 'green';
                    bars[index2].style.backgroundColor = 'green';
                    bars[index1].style.height = `${value2}px`;
                    bars[index2].style.height = `${value1}px`;
                }, i * 5 + delay);
            }
        }
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
            <button className='button' onClick={() => quicksort(array)}>Quicksort</button>
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



