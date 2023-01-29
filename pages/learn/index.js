import React from "react";
import LeaderBoardCard from "../../components/Learn/LeaderBoardCard";
import LevelBlocks from "../../components/Learn/LevelBlocks";
import GemCollectionCard from "../../components/Learn/GemCollectionCard";
import Sidebar from "../../components/Learn/Sidebar";
import LearnNav from "../../components/Learn/LearnNav";
import BottomNav from "../../components/Learn/BottomNav";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import LeaveReview from "../../components/Learn/LeaveReview";

const index = () => {
  return (
    <div>
      <Head>
        <title>HelloTalk - Learning Panel</title>
      </Head>
      <Navbar />
      <div className="pt-[6rem] grid lg:md:grid-cols-[250px_minmax(650px,_1fr)_300px]">
        <div className="lg:md:block hidden">
          <Sidebar />
        </div>
        <div>
          {/* <Link href="/printcert"><button className="mt-[15px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[40%] w-[50%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] mx-auto">Print Your Certificate</button></Link> */}
          <LevelBlocks />
        </div>
        <div>
          {/* <LeaderBoardCard /> */}
          <LeaveReview/>
          {/* <GemCollectionCard /> */}
        </div>
      </div>
      <div className="lg:md:hidden block">
        <BottomNav />
      </div>
      {/* <div data-aos="fade-up">
        
      </div> */}
    </div>
  );
};

export default index;
