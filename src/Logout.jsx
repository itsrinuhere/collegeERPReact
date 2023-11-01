import React from 'react';
const Logout = ({handleLogout}) => {
  // const handleLogout = () => {
  //   Cookies.remove('jwt_token');
  // };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
