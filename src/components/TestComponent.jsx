// ShortorialDisplay.js
import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../services/youtubeService.js';

const ShortorialDisplay = () => {
    const [shortorials, setShortorials] = useState([]);

    useEffect(() => {
        const loadVideos = async () => {
            const videos = await fetchVideos();
            setShortorials(videos.filter(v => v != null));
        };

        loadVideos();
    }, []);

    return (
        <div>
            {shortorials.map((shortorial, index) => (
                <div key={index}>
                    <h2>{shortorial.title}</h2>
                    <p>{shortorial.description}</p>
                    {/* More details and styling as needed */}
                </div>
            ))}
        </div>
    );
};

export default ShortorialDisplay;
