import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const Login = ({getData}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/authenticate', {
        'username': username, 'password': password
      }).then(res => {
          if(res.status===200){
            console.log("successfull")
              getData(res.data);
          }else{
              alert("incorrect creds");
          }

      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
