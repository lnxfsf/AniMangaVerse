import "../../styles/footer.scoped.scss";
import { Link } from "react-router-dom";

const ThirdBox = () => {
  return (
    <>
    {/* hidden lg:inline  */}

      <div className=" flex justify-end mr-24 mt-8 grow hidden lg:flex  ">
        <div>
          <div className="small_header mb-3.5">
            {/* check index.css, for global use, vertical rectangle.. */}

            <div className="secondary-left-line non_clickable ">
              <h3 className="text-2xl md:text-3xl">Like what you see ?</h3>
              <p>Consider signing up</p>
            </div>
          </div>

          <button className="btn">SignUp</button>

          <div className="small_header " style={{ marginBottom: "0.8em" }}>
            {/* check index.css, for global use, vertical rectangle.. */}
            <p className="secondary-left-line non_clickable">
              Or if you already have an account
            </p>
          </div>

          <button className="btn">LogIn</button>
        </div>
      </div>
    </>
  );
};

export { ThirdBox };
