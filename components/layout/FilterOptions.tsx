import Context from "@/context/Context";
import { useContext } from "react";
import EarthIcon from "../icons/EarthIcon";

const FilterOptions = () => {
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
          className="w-4 h-4 rounded-sm ms-4 border-4 border-red-500 outline-none hover:border-red-700 cursor-pointer"
        />
        <label
          htmlFor="fulltime"
          className="text-[#334680] ps-4 font-[500] text-sm font-[poppins] cursor-pointer">
          Full time
        </label>
      </div>
      <h3 className="uppercase text-[#B9BDCF] font-[poppins] font-bold mt-8 text-sm ">Location</h3>
      <div className="bg-white flex items-center rounded-[4px]  p-3 gap-4 font-[roboto] my-[14px]">
        <EarthIcon />
        <input
          type="text"
          placeholder="City, state, zip code or country"
          className="outline-none text-sm flex-grow  font-[roboto]"
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
          className="w-[18px] h-[18px]  outline-none cursor-pointer"
        />
        <label
          htmlFor="london"
          className="ps-3 cursor-pointer">
          London
        </label>

        <input
          type="radio"
          name="city"
          id="cairo"
          value="Cairo"
          checked={location === "Cairo"}
          onChange={handleChange}
          className="w-[18px] h-[18px] outline-none cursor-pointer"
        />
        <label
          htmlFor="cairo"
          className="ps-3 cursor-pointer">
          Cairo
        </label>

        <input
          type="radio"
          name="city"
          id="newyork"
          value="New York"
          onChange={handleChange}
          checked={location === "New York"}
          className="w-[18px] h-[18px] outline-none cursor-pointer"
        />
        <label
          htmlFor="newyork"
          className="ps-3 cursor-pointer">
          New York
        </label>

        <input
          type="radio"
          name="city"
          id="toronto"
          value="Toronto"
          onChange={handleChange}
          checked={location === "Toronto"}
          className="w-[18px] h-[18px] outline-none cursor-pointer"
        />
        <label
          htmlFor="toronto"
          className="ps-3 cursor-pointer">
          Toronto
        </label>
      </div>
    </div>
  );
};

export default FilterOptions;
