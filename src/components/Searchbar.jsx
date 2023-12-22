import search from "../assets/search.svg";
import '../styles/Home.css';

const Searchbar = () => {
    return (
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
    );
};

export default Searchbar;