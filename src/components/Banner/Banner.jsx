const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 p-4 my-4 bg-gray-100 rounded-lg md:flex-row banner-container">
        <div className="flex-1 border-2 border-red-600 banner-left">
          <h1>Left</h1>
        </div>
        <div className="flex-1 border-2 border-blue-600 banner-right">
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
