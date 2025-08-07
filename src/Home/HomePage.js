import React from 'react';
import Future from './Future';
import Services from './Services';
import CustomerSupport from './CustomerSupport';
// import Calls from './Calls';
// import FounderMessage from './FounderMessage';
import Process from './Process';
// import Integrations from './Intergrations';
import FAQ from './FAQ';
// import Blog from './Blog';
import Scheduling from './Scheduling';
import AnyBusiness from './AnyBusiness';

const HomePage = () => {
  return (
    <div className="bg-[#0a1f44] min-h-screen">
      <Future/>
      <Services/>
      <Scheduling/>
      <CustomerSupport/>
      <AnyBusiness/>
      {/* <Calls/> */}
      {/* <FounderMessage/> */}
      <Process/>
      {/* <Integrations/> */}
      <FAQ/>
      {/* <Blog/> */}
    </div>
  );
};

export default HomePage;