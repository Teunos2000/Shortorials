// Videoresult.jsx

import '../styles/Libary.css';
import { fetchVideos } from '../services/youtubeService.js';
import { useEffect, useState } from "react";

const Videoresult = () => {
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
            {shortorials.length > 0 && (
                <div key={0} id="topresult" className="topresult w-full flex">
                    <img className="thumbnail rounded-md" src={shortorials[0].thumbnail} alt="Thumbnail"/>
                    <div className="text-content ml-4">
                        <p className="date top-right">{shortorials[0].date}</p>
                        <p className="title">{shortorials[0].title}</p>
                        <p className="video-description">{shortorials[0].description}</p>
                        <p className="length">{shortorials[0].length}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videoresult;
