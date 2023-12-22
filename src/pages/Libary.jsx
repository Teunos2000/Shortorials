import '../styles/Libary.css'; // Ensure this path is correct
import Searchbar from "../components/Searchbar.jsx";
import placeholderimg from "../assets/default-placeholder.png";

const Libary = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gradient"></div>

            <div className="custom-container flex flex-col items-center justify-center">
                <div className="w-full flex justify-center items-center">
                    <Searchbar />
                </div>
                <p className="pt-3 text-center">All tutorials are handpicked and are under 3 minuts</p>

                {/*List of tutorials:*/}
                <p className="w-full text-left">We recommend: </p>

                {/*Recommended component*/}
                <div id="topresult" className="topresult w-full flex">
                    <img className="thumbnail rounded-md" src={placeholderimg} alt="Thumbnail"/>
                    <div className="text-content ml-4">
                        <p className="date top-right">2023</p>
                        <p className="title">How to make thumbnails without photoshop</p>
                        <p className="video-description">The GitHub SSH key setup is relatively simple. Just generate a GitHub SSH key if you don't have one, register the SSH key on GitHub, and then run your various Git commands as normal. Your Linux terminal window will do the rest, ...</p>
                        <p className="length">2 min</p>
                    </div>
                </div>


                {/*Other tutorials*/}
                <p className="w-full text-left">Other related videos: </p>
            </div>

        </div>
    );
};

export default Libary;
