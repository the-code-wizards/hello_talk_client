import Head from "next/head";
import React from "react";
import OurTeam from "../../components/OurTeam/OurTeam";

const index = () => {
  return (
    <div>
      <Head>
        <title>HelloTalk - Our Team</title>
      </Head>
      <div className="">
        <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default index;
