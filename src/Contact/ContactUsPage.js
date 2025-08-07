import React from 'react';
import ContactForm from './ContactForm';
import FAQ from '../Home/FAQ';
const ContactUsPage = () => {
  return (
    <div className="bg-[#0a1f44] min-h-screen">
     <ContactForm/>
     <FAQ/>
    </div>
  );
};

export default ContactUsPage;