import {NavLink, useLoaderData, useParams} from 'react-router-dom';

const CardView = () => {
    const idd = useLoaderData();
    const {id} = useParams()
    const IntId = parseInt(id)
    const Find = idd.find(single=>single.id===IntId)
   
    return (
        <div className=''>
         
          <div className='flex justify-center items-center'>
          <img className="w-4/5" src={Find.picture} alt="" />
          </div>
<div className="">
<div className=" flex justify-center items-center mt-2">
<NavLink to=''> <button  className='w-48 h-16 rounded-md text-white' style={{backgroundColor:`${Find.text_button_bg}`}}>Donate {Find.price}</button></NavLink>
</div>   
</div>       
          <div className="flex justify-center items-center mt-7 mb-20">
          <div className='w-4/5 '>
          <h1 className='text-3xl font-semibold my-3'>{Find.title}</h1>
          <h1 className='text-2xl'>{Find.description}</h1>
          </div>
          </div>
        </div>
    );
};

export default CardView;