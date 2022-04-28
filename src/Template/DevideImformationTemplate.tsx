import React from 'react';
import DevideImforMain from '../Page/DevideImforMain/DevideImforMain';
// import DevideImforInStalls from '../Page/DevideImforInStalls/DevideInforInStalls';
// import DevideInforNumber from '../Page/DevideImforNumber/DevideInforNumber';
// import LoginViewProfile from '../Page/LoginViewProfile/LoginViewProfile';

const DevideImformationTemplate = () => {
  return (
    <>
      <div className='fixed w-full h-[50px] bg-primary'>
        <div className='flex items-center h-full ml-[220px]'>
          <div className='w-[68px] h-[28px]'>
            <img
              src='./images/logo.png'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      {/* <LoginViewProfile /> */}
      {/* <DevideInforNumber /> */}
      {/* <DevideImforInStalls /> */}
      <DevideImforMain />
    </>
  );
};

export default DevideImformationTemplate;
