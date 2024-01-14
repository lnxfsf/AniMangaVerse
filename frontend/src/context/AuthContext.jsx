import { createContext, useState, useEffect } from "react";

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


    const response = await fetch("http://127.0.0.1:8000/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    if (data) {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
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
      setUser(jwtDecode(data.access));
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
