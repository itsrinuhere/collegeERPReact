import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Cookies from 'js-cookie';
import { Route, Routes } from "react-router-dom"
import Home from './Home';
import Dashboard from './Admin/Dashboard';
export default () => {
  // const[tokenId,setTokenId] = React.useState(null)
  // React.useEffect(() =>{
  //   setTokenId(Cookies.get('jwt_token'))
  //   console.log(tokenId);
  // } ,{})
  // const getData = (token) =>{
  //   console.log(token);
  //   Cookies.set('jwt_token', token); 
  //   setTokenId(token)
  // }
  // const handleLogout = () => {
  //     console.log("logout clicked");
  //     Cookies.remove('jwt_token');
  //     setTokenId()
  //   };
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
  </div>
  );
};
