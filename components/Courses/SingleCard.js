import React from 'react';



const SingleCard = ({packages}) => {
    const {id, title, picture , details} = packages;
    return (
        <div className="card card-compact bg-white shadow-2xl">
            <div className='p-3'>
            <img className='rounded-xl' src={picture} alt="Shoes" />
            </div>
  <div className="card-body">
    <h2 className="card-title text-2xl text-[#00CC17] font-bold">{title}</h2>
    <p>{details}</p>
  </div>
    <div className="card-actions justify-end">
      <button className="btn bg-[#00CC17] border-none w-full rounded-t-none ">Buy Now</button>
   

    </div>
</div>
    );
};

export default SingleCard;