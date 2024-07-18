import Context from "@/context/Context";
import { useContext } from "react";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed">
          <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
        </svg>
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
          id="html"
          name="city"
          value="London"
          onChange={handleChange}
          checked={location === "London"}
          className="w-[18px] h-[18px] me-3 outline-none"
        />
        <label htmlFor="html">London</label>

        <input
          type="radio"
          id="css"
          name="city"
          value="Amesterdam"
          checked={location === "Amesterdam"}
          onChange={handleChange}
          className="w-[18px] h-[18px] me-3 outline-none "
        />
        <label htmlFor="css">Amesterdam</label>

        <input
          type="radio"
          id="javascript"
          name="city"
          value="New York"
          onChange={handleChange}
          checked={location === "New York"}
          className="w-[18px] h-[18px] me-3 outline-none "
        />
        <label htmlFor="javascript">New York</label>

        <input
          type="radio"
          id="javascript"
          name="city"
          value="Berlin"
          onChange={handleChange}
          checked={location === "Berlin"}
          className="w-[18px] h-[18px] me-3 outline-none "
        />
        <label htmlFor="javascript">Berlin</label>
      </div>
    </div>
  );
};

export default FiterOptions;
