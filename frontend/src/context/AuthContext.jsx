import { createContext, useState, useEffect } from "react";
import axios from 'axios';
const AuthContext = createContext();

import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";

export default AuthContext;




export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  



  

      // TODO when in production, use address of Render server for this auth ! until then, locally
  let loginUser = async (e) => {
    e.preventDefault();
    

    if(e.target.username.value && e.target.password.value){

    var username = e.target.username.value
    var password = e.target.password.value
    


    //var response = await fetch("http://127.0.0.1:5000/api/v1/login", {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify({
    //    username: e.target.username.value,
    //    password: e.target.password.value,
    //  }),
    //});
    
    // sa axios request ??
    let data = await axios.post('http://127.0.0.1:5000/api/v1/login', {username, password} );
    
    console.log("user is: " + username )
    console.log("pass is: " + password )

    console.log(data)
      
    // mozda on ga opet u json prebaci !!! 
    //let data = await response.json();

    if (data) {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      
      console.log("token je:" +  data.data.access_token)
      
      setUser(jwtDecode(data.data.access_token));
      navigate("/");
    } else {
      alert("Something went wrong while loggin in the user!");
    }
      

    
    }
  };

  let logoutUser = (e) => {
    e.preventDefault();
    localStorage.removeItem("authTokens");
    setAuthTokens(null);
    setUser(null);
    navigate("/login");
  };

  const updateToken = async () => {
    const response = await fetch("http://127.0.0.1:8000/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.data.access_token));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 9; // 9 minutes
    let interval = setInterval(() => {
      if (authTokens && loading) {
        updateToken();
      }
    }, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
