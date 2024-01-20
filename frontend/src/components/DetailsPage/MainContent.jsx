import "../../styles/DetailsPage.scoped.scss";
import { YoutubeFrame } from "./YoutubeFrame";

const MainContent = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden flex grow bg-blacky justify-center items-start flex-col">
    
    
        <h2 className="ml-2 about_ttl m-6 border-pinky border-l-2 pr-24 pl-2 md:ml-6 lg:ml-32">
          About {data.title}:
        </h2>

        <p className=" parag1  break-normal pl-2 md:p-6  w-[95%] md:w-[80%] lg:ml-28">{data.desc}</p>

        <YoutubeFrame yt_trailer={data.yt_trailer} />
      </div>
    </>
  );
};

export { MainContent };
