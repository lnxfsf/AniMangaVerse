import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="line"> </div>

      <footer className="flex flex-cols-2 justify-start items-start">
        <div className="first flex flex-cols-2 justify-start items-center gap-24 ml-20 mt-8 ">
          <div className="flex justify-start gap-4 flex-col">
            <div className="small_header">
              {/* check index.css, for global use, vertical rectangle.. */}
              <h3 className="secondary-left-line">Contacts:</h3>
            </div>

            <p>support@animelist.me</p>
            <p>020-XXX-XXX</p>

            <div className="social flex flex-row gap-4">
              <img src="/assets/social/ig.svg"></img>
              <img src="/assets/social/fb.svg"></img>
              <img src="/assets/social/threads.svg"></img>
              <img src="/assets/social/x.svg"></img>
            </div>
          </div>

          <div>
            <div className="small_header">
              {/* check index.css, for global use, vertical rectangle.. */}
              <h3 className="secondary-left-line">Navigation:</h3>
            </div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/anime">Anime</Link>
              </li>
              <li>
                <Link to="/manga">Manga</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex justify-end mr-24 mt-8 grow">
          <div>
            <div className="small_header mb-3.5">
              {/* check index.css, for global use, vertical rectangle.. */}

              <div className="secondary-left-line">
                <h3>Like what you see ?</h3>
                <p>Consider signing up</p>
              </div>
            </div>

            <button className="btn">SignUp</button>

            <div className="small_header " style={{ marginBottom: "0.8em" }}>
              {/* check index.css, for global use, vertical rectangle.. */}
              <p className="secondary-left-line">Or if you already have an account</p>
            </div>

            <button className="btn">LogIn</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export {Footer}