import React from 'react';



const SingleCard = ({packages}) => {
    const {id, title, picture , details} = packages;
    return (
        <div className="card card-compact w-96 bg-white shadow-2xl">
            <div className='p-4 '>
            <img className='rounded-xl' src={picture} alt="Shoes" />
            </div>
  <div className="card-body">
    <h2 className="card-title text-2xl text-blue-700 font-bold">{title}</h2>
    <p>{details}</p>
  </div>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-500 border-none w-full rounded-b-none rounded-t-xl">Buy Now</button>
   

    </div>
</div>
    );
};

export default SingleCard;