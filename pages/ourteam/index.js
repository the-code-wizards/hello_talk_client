import Head from "next/head";
import React from "react";
import OurTeam from "../../components/OurTeam/OurTeam";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";

const index = () => {
  return (
    <div>
      <Head>
        <title>HelloTalk - Our Team</title>
      </Head>
      <div className="max-w-[1240px] mx-auto">
        <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default index;
