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
        const x = (e.clientX - boundingRect.left) * movingValue - boundingRect.width / 5;

        // Adjust the translation based on your requirements
        const rightEdge = window.innerWidth - boundingRect.width;
        const bottomEdge = window.innerHeight - boundingRect.height;

        const offsetXPercentage = 0.005; // Adjust this value to move the image horizontally (percentage of screen width)

        // Adjust this value to move the image vertically (percentage of screen height)
        const offsetYPercentage = -1;
        const offsetY = bottomEdge * offsetYPercentage;

        move.style.transform = `translateX(${Math.max(0, rightEdge - x) + rightEdge * offsetXPercentage}px) translateY(${Math.max(0, bottomEdge - (e.clientY - boundingRect.top) * movingValue) + offsetY}px)`;
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
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300"
            />

            {/* Temple Image */}
            <img
                src={templeImage}
                alt="Temple"
                data-value="0.04"
                className="absolute object bottom-0 left-4 temple"
            />

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                {/* Your content here */}
            </div>
        </div>
    );
};

export default Home;
