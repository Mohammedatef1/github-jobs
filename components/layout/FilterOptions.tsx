import Context from "@/context/Context";
import { useContext } from "react";
import EarthIcon from "../icons/EarthIcon";
import WatchIcon from "../icons/WatchIcon";

const FiterOptions = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error();
  }

  const { location, setLocation, fulltime, setFulltime } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="fulltime"
          checked={fulltime}
          onChange={() => setFulltime(!fulltime)}
          className="w-4 h-4 rounded-sm mx-4 border-4 border-red-500 outline-none hover:border-red-700"
        />
        <label
          htmlFor="fulltime"
          className="text-[#334680] font-[500] text-sm font-[poppins]">
          Full time
        </label>
      </div>
      <h3 className="uppercase text-[#B9BDCF] font-[poppins] font-bold mt-8 text-sm ">Location</h3>
      <div className="bg-white flex items-center rounded-[4px]  p-3 gap-4 font-[roboto] my-[14px]">
        <EarthIcon />
        <input
          type="text"
          placeholder="City, state, zip code or country"
          className="outline-none text-sm flex-grow  font-[roboto] "
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="ps-3 font-[poppins] text-sm font-[500] text-[#334680] grid grid-cols-[min-content_max-content] gap-y-4 my-6 items-center">
        <input
          type="radio"
          name="city"
          id="london"
          value="London"
          onChange={handleChange}
          checked={location === "London"}
          className="w-[18px] h-[18px] me-3 outline-none"
        />
        <label htmlFor="london">London</label>

        <input
          type="radio"
          name="city"
          id="amsterdam"
          value="Amsterdam"
          checked={location === "Amsterdam"}
          onChange={handleChange}
          className="w-[18px] h-[18px] me-3 outline-none "
        />
        <label htmlFor="amsterdam">Amsterdam</label>

        <input
          type="radio"
          name="city"
          id="newyork"
          value="New York"
          onChange={handleChange}
          checked={location === "New York"}
          className="w-[18px] h-[18px] me-3 outline-none "
        />
        <label htmlFor="newyork">New York</label>

        <input
          type="radio"
          name="city"
          id="berlin"
          value="Berlin"
          onChange={handleChange}
          checked={location === "Berlin"}
          className="w-[18px] h-[18px] me-3 outline-none "
        />
        <label htmlFor="berlin">Berlin</label>
      </div>
    </div>
  );
};

export default FiterOptions;
