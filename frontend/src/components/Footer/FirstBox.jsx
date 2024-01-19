import "../../styles/footer.scoped.scss";
import { Link } from "react-router-dom";

const FirstBox = () => {
  return (
    <>
      <div className="flex justify-start  flex-col hidden md:flex  gap-4   text-2xl md:text-3xl">
        <div className="small_header">
          {/* check index.css, for global use, vertical rectangle.. */}
          <h3 className="secondary-left-line non_clickable">Contacts:</h3>
        </div>

        <p className="non_clickable">support@animelist.me</p>
        <p className="non_clickable">020-211-432</p>

        <div className="social flex flex-row gap-4">
          <img className="clickable" src="/assets/social/ig.svg"></img>
          <img className="clickable" src="/assets/social/fb.svg"></img>
          <img className="clickable" src="/assets/social/threads.svg"></img>
          <img className="clickable" src="/assets/social/x.svg"></img>
        </div>
      </div>
    </>
  );
};

export { FirstBox };
