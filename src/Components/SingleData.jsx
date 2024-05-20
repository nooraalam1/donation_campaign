import { NavLink } from "react-router-dom";

const SingleData = ({singleData}) => {
    const{id,picture,category,category_bg,card_bg,title,text_button_bg}=singleData
    function cardButton(){
      console.log("Card Clicked",id);
    }
    return (
      <button className="w-72 my-4 " onClick={()=>cardButton(id)}>
        <NavLink className="" to={`/cardview/${id}`}>
         <div className="" style={{backgroundColor: `${category_bg}`}} >
        <div className="" >
<img src={picture} className="w-full mb-3" />
  <div className="ml-3">
    <h2 style={{backgroundColor:`${card_bg}` ,color:`${text_button_bg}`}} className="text-xl w-24 rounded-lg mb-3" >{category}</h2>
    <p className="text-left pb-3" style={{color:`${text_button_bg}`}}>{title}</p>
   
  </div>
</div>
       </div>
      </NavLink>
      </button>
    );
};

export default SingleData;