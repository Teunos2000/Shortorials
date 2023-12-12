// Home.js

import React, { useEffect } from 'react';
import heroImage from '../assets/hero3.png';
import photoshop from '../assets/photoshop.svg';
import code from '../assets/programming.svg';
import hammer from '../assets/hammer.svg';
import after from '../assets/after-effects.svg';
import premier from '../assets/premiere.svg';
import computer from '../assets/computer.svg';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
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

            {/* Content section */}
            <div className= "flex justify-center items-center">

                {/*Logo*/}
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute logo"
                />

                <h1 className="absolute oneliner">Short video tutorials about all relevant topics</h1>

                {/* Search Bar with Icon */}
                <div className="absolute sb left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                    <div className="search-container relative">
                        <input
                            type="text"
                            placeholder="How to edit DPI on Adobe Photoshop......."
                            className="searchbar pl-11 p-2"
                        />
                        <img
                            src={search}
                            alt="Search"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        />
                    </div>
                </div>

                {/* Icons Row and Description */}
                <div className="icons-row-container absolute left-0 w-full">
                    <div className="flex justify-center">
                        {/* Replace these with your actual icon components or images */}
                        <img src={photoshop} alt="Photoshop Icon" className="icon" />
                        <img src={code} alt="Programming icon" className="icon" />
                        <img src={hammer} alt="Hammer Icon" className="icon" />
                        <img src={after} alt="After Effects Icon" className="icon" />
                        <img src={premier} alt="Premier Pro Icon" className="icon" />
                        <img src={computer} alt="PC Icon" className="icon" />
                    </div>
                </div>
                <p className="absolute text-white text-center description">
                    Bid farewell to 15-minute YouTube tutorials on basic topics.
                    Explore our library of brief, to-the-point tutorials, sparing you
                    from enduring unnecessary 2-minute YouTube intros.
                    Get straight to the knowledge you seek, minus the time-wasting preamble.
                </p>
            </div>
        </div>
    );
};

export default Home;
