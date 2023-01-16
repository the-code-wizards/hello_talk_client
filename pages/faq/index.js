import React from "react";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";

const index = () => {
  return (
    <div>
      <Navbar/>
      <FAQ></FAQ>
      <Footer/>
    </div>
  );
};

export default index;
