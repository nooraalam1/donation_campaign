<<<<<<< HEAD
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleData from './SingleData';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <div className="">
                <h1 className="text-center text-3xl">I Grow By Helping People I Need</h1>
                <div className="flex justify-center items-center my-6">
                <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search Here" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
<button className="btn btn-primary">Search</button>
                </div>
            </div>
            <div className="md:grid grid-cols-2 lg:grid-cols-4 ">
                {
                    data.map(singleData=><SingleData singleData={singleData}></SingleData>)
                }
            </div>

=======
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CardList from "./CardList";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="mb-10">
            <Banner data={data}></Banner>
            {/* <CardList data={data}></CardList> */}
>>>>>>> c9b1d4b (Responsive)
        </div>
    );
};

export default Home;