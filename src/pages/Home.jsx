// Home.js

import React, { useEffect } from 'react';
import heroImage from '../assets/hero3.png';
import templeImage from '../assets/mountain_with_temple.png';
import '../styles/Home.css';

const Home = () => {
    useEffect(() => {
        document.addEventListener("mousemove", parallax);

        return () => {
            document.removeEventListener("mousemove", parallax);
        };
    }, []);

    function applyParallax(move, e) {
        const movingValue = parseFloat(move.getAttribute("data-value"));
        const boundingRect = move.getBoundingClientRect();
        const x = (e.clientX - boundingRect.left) * movingValue;
        const y = (e.clientY - boundingRect.top) * movingValue;

        const offsetXPercentage = 0.02; // Adjust this value to move the image horizontally (percentage of screen width)
        const offsetYPercentage = 0.02; // Adjust this value to move the image vertically (percentage of screen height)

        const offsetX = window.innerWidth * offsetXPercentage;
        const offsetY = window.innerHeight * offsetYPercentage;

        move.style.transform = `translate(${Math.max(0, offsetX - x)}px, ${Math.max(0, offsetY - y)}px)`;
    }

    function parallax(e) {
        document.querySelectorAll(".object").forEach((move) => {
            applyParallax(move, e);
        });
    }

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Hero Image */}
            <img
                src={heroImage}
                alt="Hero"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Temple Image */}
            <img
                src={templeImage}
                alt="Temple"
                data-value="0.04"
                className="absolute object bottom-0 right-0 temple"
            />

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                {/* Your content here */}
            </div>
        </div>
    );
};

export default Home;
