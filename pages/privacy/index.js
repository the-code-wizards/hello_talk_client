import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer';
import Privacy from '../../components/Privacy/Privacy';
const index = () => {
  return (
    <div>
      <Navbar />
      <Privacy></Privacy>
      <Footer />
    </div>
  );
};

export default index;
