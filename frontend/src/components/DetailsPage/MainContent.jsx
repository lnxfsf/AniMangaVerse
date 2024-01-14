import "../../styles/DetailsPage.scoped.scss";
import { YoutubeFrame } from "./YoutubeFrame";

const MainContent = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden flex grow bg-blacky justify-center items-start flex-col">
        <h2 className="about_ttl m-6 border-pinky border-l-2 pr-24 pl-2 ml-32">
          About {data.title}:
        </h2>

        <p className="parag1  break-normal p-6 w-[80%] ml-28">{data.desc}</p>

        <YoutubeFrame yt_trailer={data.yt_trailer} />
      </div>
    </>
  );
};

export { MainContent };
