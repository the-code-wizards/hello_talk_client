import React, { useEffect, useState } from 'react';

const DetailsCard = () => {

  const [loading, setLoading] = useState(true)
  const [courseDetails, setCourseDetails] = useState({});
  const { title, picture, details, offer_price, price } = courseDetails;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://hello-talk-webserver.vercel.app/course/63bef8eb8675bb27211f0c53`
    )
      .then((res) => {
        setCourseDetails(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className='max-w-[1240px] mx-auto my-16'>
      <div className="card lg:card-side">
        <figure><img src={picture} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#00CC17] border-none px-12">Buy</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;