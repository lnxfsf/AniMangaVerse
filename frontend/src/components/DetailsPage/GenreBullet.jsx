import "../../styles/DetailsPage.scoped.scss";

const GenreBullet = ({ item, index }) => {
  return (
    <>
      <div
        key={index}
        className="flex justify-center items-center border-pinky border-2 rounded-2xl w-auto h-auto  "
      >
        <p className="parag pl-4 pr-4 p-1">{item}</p>
      </div>
    </>
  );
};

export { GenreBullet };
