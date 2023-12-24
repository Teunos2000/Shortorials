// Videoresults.jsx

import '../styles/Libary.css';
import { useEffect, useState } from "react";
import { fetchVideos } from '../services/youtubeService.js';

const Videoresults = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const loadVideos = async () => {
            const allVideos = await fetchVideos();
            setVideos(allVideos.filter(v => v != null));
        };

        loadVideos();
    }, []);

    return (
        <div>
            {videos.slice(1).map((video, index) => (
                <div key={index} className="topresult w-full flex">
                    <img className="thumbnail rounded-md" src={video.thumbnail} alt="Thumbnail"/>
                    <div className="text-content ml-4">
                        <p className="date top-right">{video.date}</p>
                        <p className="title">{video.title}</p>
                        <p className="video-description">{video.description}</p>
                        <p className="length">{video.length}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Videoresults;
