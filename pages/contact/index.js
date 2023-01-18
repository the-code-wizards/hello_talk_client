import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default index;