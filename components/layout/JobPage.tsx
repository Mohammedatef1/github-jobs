import Image from "next/image";
import Link from "next/link";
import noImg from "../../assets/no image.jpg";

interface JobPageProps {
  title: string | string[] | undefined;
  description: string | string[] | undefined;
  company_name: string | string[] | undefined;
  location: string | string[] | undefined;
  thumbnail: string;
}

const JobPage: React.FC<JobPageProps> = ({ title, description, company_name, location, thumbnail }) => {
  return (
    <div>
      <h2 className="font-[poppins] font-bold text-[#282538] text-2xl">
        Github <span className="font-[300] ">Jops</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-9 my-8">
        <div className="font-[poppins]">
          <Link href="/">
            <div className="flex items-center gap-x-3 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1E86FF">
                <path d="M354-270 144-480l210-210 51 51-123 123h534v72H282l123 123-51 51Z" />
              </svg>
              <button className="border-none text-[#1E86FF] text-sm  hover:underline font-[500]">Back to search</button>
            </div>
          </Link>
          <h3 className="uppercase text-[#B9BDCF] text-sm font-bold mt-7">How to apply</h3>
          <p className="mt-4 text-sm font-[500] text-[#334680]">Please email a copy of your resume and online portfolio to wes@kasisto.com & CC eric@kasisto.com</p>
        </div>
        <div className="font-[roboto] text-[#334680]">
          <div className="flex items-center gap-x-6">
            <h2 className="font-bold text-2xl ">{title}</h2>
            <div className="rounded-[4px] py-1 px-2 border border-[#334680] w-max text-xs font-bold ">Full time</div>
          </div>
          <div className="text-[#B7BCCE] flex items-end gap-2 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#B7BCCE">
              <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" />
            </svg>
            <p className="font-[500] text-xs">1 days ago</p>
          </div>
          <div className="flex gap-x-2 items-center my-8">
            <Image
              src={thumbnail ? thumbnail : noImg}
              width={11}
              height={11}
              className="w-11 h-11 rounded-[4px] "
              alt=""
            />
            <div>
              <h4 className="font-bold text-lg">{company_name}</h4>
              <div className="text-[#B7BCCE] flex items-end gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="#B7BCCE">
                  <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" />
                </svg>
                <p className="font-[500] text-xs">{location}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-md whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
