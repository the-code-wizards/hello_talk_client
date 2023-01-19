import Head from "next/head";
import React from "react";
import Blog from "../../components/Blog/Blog";
import Navbar from "../../components/Shared/Navbar/Navbar";

const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <Head>
        <title>Blog - HELLO-TALK</title>
      </Head>
      <div className="py-14">
        <Blog></Blog>
      </div>
    </>
  );
};

export default index;
