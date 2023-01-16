import React from "react";
import FreqAskedQ from "../../components/FreqAskedQ/FreqAskedQ";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const index = () => {
  return (
    <div>
      <Navbar/>
      <FreqAskedQ></FreqAskedQ>
      <Footer/>
    </div>
  );
};

export default index;
