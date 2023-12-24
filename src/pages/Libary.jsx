import '../styles/Libary.css';
import Searchbar from "../components/Searchbar.jsx";
import Videoresult from "../components/Videoresult.jsx";
import Videoresults from "../components/Videoresults.jsx";

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
                <p className="pt-11 pb-3 w-full text-left">We recommend: </p>

                {/*Recommended component*/}
                <div className="goldenborder">
                <Videoresult />
                </div>

                {/*Other tutorials*/}
                <p className="pt-11 pb-3 w-full text-left">Other related videos: </p>
                <Videoresults />
            </div>

        </div>
    );
};

export default Libary;
