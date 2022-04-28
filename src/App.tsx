import React from 'react';
import './App.scss';
import GetNumber from './Page/GetNumber/GetNumber';
// import PopupPrintNumber from './Page/PopupPrintNumber/PopupPrintNumber';
// import PopupProfile from './Page/PopupProfile/PopupProfile';
// import NumberOfDevideTemplated from './Template/NumberOfDevideTemplated';
// import DevideImformationTemplate from './Template/DevideImformationTemplate';
// import ResetNewPasswordTemplate from './Template/ResetNewPasswordTemplate';
// import ResetPasswordTemplate from './Template/ResetPasswordTemplate';
// import Login from './Page/Login/Login';
// import UserLoginTemplated from './Template/UserLoginTemplated';

function App() {
  return (
    <div className='App' style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* <UserLoginTemplated></UserLoginTemplated> */}
      {/* <ResetPasswordTemplate /> */}
      {/* <ResetNewPasswordTemplate /> */}
      {/* <DevideImformationTemplate /> */}
      {/* <NumberOfDevideTemplated /> */}
      {/* <PopupProfile /> */}
      {/* <PopupPrintNumber /> */}
      <GetNumber />
    </div>
  );
}

export default App;
