import "../../styles/footer.scoped.scss";
import { Link } from "react-router-dom";
import { FirstBox } from "./FirstBox";
import { SecondBox } from "./SecondBox";
import { ThirdBox } from "./ThirdBox";

const Footer = () => {
  return (
    <>
      <div className="line"> </div>

      <footer className="flex flex-cols-2 justify-start items-start flex-wrap lg:flex-row ">
    

        <div className="first flex flex-cols-2 justify-start items-center flex-wrap md:gap-24 ml-8 md:ml-20 mt-8 ">
          <FirstBox />
          <SecondBox />
        </div>

        <ThirdBox />
    

    
      </footer>
    </>
  );
};

export { Footer };
