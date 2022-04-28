import React from 'react';
import NumberOfDevideNow from '../Page/NumberOfDevideNow/NumberOfDevideNow';
// import NumberOfDevide from '../Page/NumberOfDevide/NumberOfDevide';
// import NumberOfDevideMain from '../Page/NumberOfDevideMain/NumberOfDevideMain';
const NumberOfDevideTemplated = () => {
  return (
    <React.Fragment>
      <div className='fixed top-2 left-12'>
        <div className='w-[60px] h-[48px]'>
          <img
            src='./images/Logo_alta.png'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      {/* <NumberOfDevide /> */}
      {/* <NumberOfDevideMain /> */}
      <NumberOfDevideNow />
    </React.Fragment>
  );
};

export default NumberOfDevideTemplated;
