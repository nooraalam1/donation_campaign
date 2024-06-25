import { NavLink } from 'react-router-dom';

const Banner = () => {
    function searchbtn(){
        console.log("Searched");
    }
    return (
        <div>
            <div className="">
                <h1 className="text-center text-3xl">IIIGrow By Helping People I Need</h1>
                <div className="flex justify-center items-center my-6">
                <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow " placeholder="Search Here" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
{/* <NavLink> */}
<button className="btn " onClick={()=>searchbtn()}>Search</button>
{/* </NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;