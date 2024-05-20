import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
        <div className="md:flex justify-between items-center p-8">
            <div className="">
                <img src="/public/Images/Logo.png" alt="" srcset="" />
            </div>
            <div>
            <div className="flex gap-10">
            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-red-500 font-bold" : ""
    
  }
>
  Home
</NavLink>
            <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline  text-red-500 font-bold" : ""
  }
>
  Donation
</NavLink>
            <NavLink
  to="/stat"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline  text-red-500 font-bold" : ""
  }
>
  Statistics
</NavLink>
            </div>
            
            </div>
        </div>
        
        </div>
    );
};

export default Navbar;