import Image from "next/image";
import Link from "next/link";
import noImg from "../../assets/no image.jpg";

export interface Job {
  title?: string;
  company_name?: string;
  location?: string;
  via?: string;
  description?: string;
  thumbnail?: string;
  detected_extensions?: Detected_Extentions;
  job_id?: string;
}

interface Detected_Extentions {
  schedule_type: string;
  posted_at?: string;
}

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const { title, company_name, location, description, detected_extensions, thumbnail } = job;
  return (
    <div className="bg-white rounded-[4px] font-[roboto] p-3 grid grid-cols-[max-content_1fr] grid-rows-[max-content_max-content] border border-transparent lg:grid-cols-[max-content_1fr_max-content_max-content] lg:grid-rows-1 shadow-sm hover:border-blue-700 transition-colors">
      <Image
        src={thumbnail ? thumbnail : noImg}
        width={90}
        height={90}
        className="w-[90px] h-[90px] row-span-full rounded-[4px]"
        alt=""
      />
      <Link
        href={{ pathname: `/jobs/${title}`, query: { title, company_name, location, description, thumbnail } }}
        className="text-[#334680] ps-4">
        <h4 className="text-xs font-bold mb-1">{company_name}</h4>
        <h3 className="text-[16px] mb-2 hover:underline cursor-pointer">{title}</h3>
        {detected_extensions?.schedule_type.includes("Full-time") && <div className="rounded-[4px] py-1 px-2 border border-[#334680] w-max text-xs font-bold ">Full time</div>}
      </Link>
      <div className="ps-4 flex lg:mt-0 mt-4 ">
        <div className="text-[#B7BCCE] flex items-end gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#B7BCCE">
            <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30ZM432-172v-68q-20 0-34-14.1T384-288v-48L175-545q-4 19-5.5 35t-1.5 30q0 115 74.5 203T432-172Zm288-109q18-21 31.5-44t22.36-48.55q8.86-25.56 13.5-52.5Q792-453 792-480q0-94.61-52-172.8Q688-731 600-768v24q0 29.7-21.15 50.85Q557.7-672 528-672h-96v48q0 20.4-13.8 34.2Q404.4-576 384-576h-48v96h240q20.4 0 34.2 13.8Q624-452.4 624-432v96h41q23 0 39 16t16 39Z" />
          </svg>
          <p className="font-[500] text-xs">{location}</p>
        </div>
        <div className="text-[#B7BCCE] flex items-end gap-2 ms-7 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#B7BCCE">
            <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Zm0-384Zm.48 312q129.47 0 220.5-91.5Q792-351 792-480.48q0-129.47-91.02-220.5Q609.95-792 480.48-792 351-792 259.5-700.98 168-609.95 168-480.48 168-351 259.5-259.5T480.48-168Z" />
          </svg>
          <p className="font-[500] text-xs">{detected_extensions?.posted_at ? detected_extensions.posted_at : "unknown time"}</p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
