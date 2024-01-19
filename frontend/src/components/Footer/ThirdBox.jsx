import "../../styles/footer.scoped.scss";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";


const ThirdBox = () => {
  
  const navigate = useNavigate();

  const handleRedirectLogin = () => {
    navigate("/login");
  };


  return (
    <>
    {/* hidden lg:inline  */}

    {/* 
      <Button   sx={{bgcolor: "#e5c9d9", color: "#1e1e1e" , borderRadius: 25,  border: `1px solid #ea1179`,   '&:hover': { background: "rgb(234, 17, 121)", color: "white"    }  }} >
              Login
      </Button> */}


      <div className=" flex justify-end mr-24 mt-8 grow hidden lg:flex  ">
        <div>
          <div className="small_header mb-3.5">
            {/* check index.css, for global use, vertical rectangle.. */}

            <div className="secondary-left-line non_clickable ">
              <h3 className="text-2xl md:text-3xl">Like what you see ?</h3>
              <p>Consider signing up</p>
            </div>
          </div>

          <Button className="btn"    sx={{bgcolor: "#e5c9d9", color: "#fff" , borderRadius: 25,  border: `1px solid #ea1179`,   '&:hover': { background: "rgb(234, 17, 121)", color: "white"    }  }} onClick={handleRedirectLogin}>Sign Up</Button>

          <div className="small_header " style={{ marginBottom: "0.8em" }}>
            {/* check index.css, for global use, vertical rectangle.. */}
            <p className="secondary-left-line non_clickable">
              Or if you already have an account
            </p>
          </div>


          <Button className="btn"    sx={{bgcolor: "#e5c9d9", color: "#fff" , borderRadius: 25,  border: `1px solid #ea1179`,   '&:hover': { background: "rgb(234, 17, 121)", color: "white"    }  }} onClick={handleRedirectLogin} >Login</Button>
        </div>
      </div>
    </>
  );
};

export { ThirdBox };
