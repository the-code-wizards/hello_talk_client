import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SendEmailCard = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const { name, email } = profile;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://hello-talk-webserver.vercel.app/profile?email=${user?.email}`
      )
      .then((res) => {
        setProfile(res?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // }
  }, []);

  const reviewHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const comments = form.comments.value;
    const comment = { name, email, comments };
    fetch(`https://hello-talk-webserver.vercel.app/postreview`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          form.reset();
          console.log(data);
        }
      });
  };
  if (loading) {
    return <h2>loading</h2>;
  }
  return (
    <div className="lg:md:px-0 px-3 pr-3">
      <Link className="flex justify-center mt-4" href="/leaderboard">
        <button type="button" className="bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] w-[80%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] px-4 text-center">See Leader Board</button>
      </Link>
      <div className=" card border-[2px] border-[#61B800] shadow-xl text-center text-[#3C3C3C] my-10">
        <div className="card-body ">
          <h2 className="text-center font-featherBold lg:md:text-[1.2rem] text-xl">
            leave us a review
          </h2>
          <form onSubmit={reviewHandler}>
            <div className="flex justify-center my-4">
              <input
                type="text"
                placeholder="Type here"
                name="comments"
                className="input w-full lg:md:max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[50%] hover:bg-[#61E002]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEmailCard;
