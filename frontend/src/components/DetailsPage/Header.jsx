import "../../styles/DetailsPage.scoped.scss";

const Header = ({ data }) => {
  return (
    <>
    


      <div
        className="w-full h-96 flex justify-start items-end img "
        style={{ backgroundImage: `url("${data.background_image}")` }}
      >


        <div className="ttl-box bg-blacky p-4 mb-[-2px]">

          <div className=" m-4 lg:m-8 border-pinky border-l-2 pr-24 pl-2">
            <h1>{data.title}</h1>
            <p>{data.num_of_fav} favorites</p>
          </div>

        </div>
    

    
      </div>
    


        <div className="ttl-box bg-blacky p-4 mb-[-2px] img1">

          <div className=" md:m-4  border-pinky border-l-2  pl-2 ">
            <h1>{data.title}</h1>
            <p>{data.num_of_fav} favorites</p>
          </div>

        </div>
    
    
    
    </>
  );
};

export { Header };
