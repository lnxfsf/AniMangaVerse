import "../../styles/DetailsPage.scoped.scss";
import { GenreBullet } from "./GenreBullet";

const LeftBox = ({ data , anime  }) => {
  return (
    <>
      <div className="basis-1/3 flex items-start justify-center ">
        <div className="flex border-pinky border-2 w-56 m-6 h-auto rounded-2xl p-4 flex-col">
          {anime ? (
            <div>
              <p className="parag">Studios:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {data.studio}
              </p>
            </div>
          ) : (
            <div>
              <p className="parag mt-2">Status:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {data.status}
              </p>
            </div>
          )}

          {anime ? (
            <div>
              <p className="parag mt-2">Seasons:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {data.seasons}
              </p>
            </div>
          ) : (
            <div>
              <p className="parag mt-2">Country of origin:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {data.country_origin}
              </p>
            </div>
          )}

          {anime ? (
            <div>
              <p className="parag mt-2">Number of episodes:</p>
              <p className="parag border-pinky border-l-2 pl-2 mt-1">
                {data.episodes}
              </p>
            </div>
          ) : (
            <div></div>
          )}

          <p className="parag mt-2">Genres:</p>

          <div className="flex  w-full h-auto mt-1 flex-wrap justify-start items-center gap-y-2 gap-x-2">
            {data.genre.map((item, index) => (
              <GenreBullet item={item} key={index} />
            ))}
          </div>

          <p className="parag mt-2">Aired:</p>
          <p className="parag border-pinky border-l-2 pl-2 mt-1">
            {data.start_date}
          </p>

          <p className="parag mt-2">Ended:</p>
          <p className="parag border-pinky border-l-2 pl-2 mt-1">
            {data.end_date}
          </p>
        </div>
      </div>
    </>
  );
};

export { LeftBox };
