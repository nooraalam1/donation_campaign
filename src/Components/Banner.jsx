<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="">
                <h1 className="text-center text-3xl">I Grow By Helping People I Need</h1>
                <div className="flex justify-center items-center my-6">
                <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow " placeholder="Search Here" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
<NavLink>
<button className="btn btn-primary " onClick={}>Search</button>
</NavLink>
                </div>
            </div>
=======
import { useState } from "react";
import CardList from "./CardList";

const Banner = ({ data }) => {
    const [searchedData, handleSearchedData] = useState(data);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.name.value;
        const filteredData = data.filter(search => search.button_text === searchText);
        
        if(searchText==""){
            handleSearchedData(data);
        }
        else handleSearchedData(filteredData);
    };

    const bannerStyle = {
        backgroundImage: 'url(/bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
    };

    const overlayStyle = {
        content: '',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    return (
        <div>
            <div id="overlay" className="h-96 mb-5" style={bannerStyle}>
                <div style={overlayStyle}></div>
                <div className="flex justify-center items-center h-full relative">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-black">
                            I Grow By Helping People In Need
                        </h1>
                        <div className="mt-5">
                            <form onSubmit={handleSearch} className="">
                                <input
                                    className="py-3 px-2 rounded-s-lg border-[2px]"
                                    type="text"
                                    name="name"
                                />
                                <input
                                    className="py-3 px-2 rounded-e-lg bg-[#FF444A] border-[2px]"
                                    type="submit"
                                    value="Search"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <CardList searchedData={searchedData}></CardList>
>>>>>>> c9b1d4b (Responsive)
        </div>
    );
};

<<<<<<< HEAD
export default Banner;
=======
export default Banner;
>>>>>>> c9b1d4b (Responsive)
