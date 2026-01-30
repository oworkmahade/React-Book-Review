import { useNavigate } from "react-router-dom";
import bannerImg from "../../assets/images/banner.png";

const Banner = () => {
  const navigate = useNavigate();

  const handleViewList = () => {
    console.log("clicked");
    navigate("/listed-books");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 p-4 my-4 bg-gray-100 rounded-lg md:flex-row banner-container">
        <div className="flex flex-col items-start justify-center flex-1 p-4 banner-left">
          <h1 className="text-5xl font-bold">
            Books to freshen up{" "}
            <span className="leading-relaxed">your bookshelf</span>
          </h1>

          <button
            onClick={handleViewList}
            className="btn bg-[#23be0a] text-white mt-4"
          >
            View The List
          </button>
        </div>
        <div className="flex items-center justify-center flex-1 p-4 banner-right">
          <img className="h-96" src={bannerImg} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
