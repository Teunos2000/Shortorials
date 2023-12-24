// youtubeService.js
import { libary } from '../libary/libary.js';
import {Shortorial} from "../models/Shortorial.js";

const API_KEY = import.meta.env.VITE_API_KEY;

// Function to fetch video details from YouTube API
export const fetchVideos = async () => {
    return Promise.all(libary.map(async (item) => {
        const videoId = extractVideoID(item.url);
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const videoDetails = data.items[0];
            console.log(data); // Add this line to log the entire API response
            return mapToShortorial(item, videoDetails);
        } catch (error) {
            console.error('Error fetching video details:', error);
            return null;
        }
    }));
};

// Helper function to extract Video ID from URL
const extractVideoID = (url) => {
    const regExp = /^.*(youtu.be\/|youtube.com\/embed\/|youtube.com\/watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

// Map API response to Shortorial model
const mapToShortorial = (item, videoDetails) => {
    const videoId = extractVideoID(item.url);
    console.log(`Fetching details for Video ID: ${videoId}`);

    return new Shortorial(
        item.url,
        item.keywords,
        videoDetails.snippet.title,
        videoDetails.snippet.description,
        videoDetails.contentDetails.duration,
        videoDetails.snippet.publishedAt,
        videoDetails.snippet.thumbnails.high.url
    );
};
