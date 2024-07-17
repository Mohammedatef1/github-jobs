import Context from "@/context/Context";
import useJobs from "@/hooks/useJobs";
import { useContext } from "react";

const Header = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error();
  }

  const { query, setQuery } = context;

  const { refetch, isFetching } = useJobs();
  return (
    <nav>
      <h2 className="font-[poppins] font-bold text-[#282538] text-2xl">
        Github <span className="font-[300] ">Jops</span>
      </h2>
      <div className="my-8 p-10 rounded-lg flex justify-center items-center search-container">
        <div className="w-[790px] bg-white flex items-center rounded-[4px] ps-4 p-1 gap-2 font-[roboto]">
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
            className=" text-sm flex-grow outline-none"
            placeholder="Title, companies, expertise or benefits"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="rounded-[4px] bg-[#1E86FF] py-4 px-12 text-[16px] leading-4 spacin text-white text-center  font-[500] transition-all disabled:bg-[#a1c2e8]"
            disabled={isFetching}
            onClick={() => {
              refetch();
            }}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
