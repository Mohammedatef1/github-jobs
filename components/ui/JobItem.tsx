import Image from "next/image";
import Link from "next/link";
import noImg from "../../assets/no image.jpg";
import EarthIcon from "../icons/EarthIcon";
import WatchIcon from "../icons/WatchIcon";

export interface Job {
  title?: string;
  company_name?: string;
  location?: string;
  via?: string;
  description?: string;
  thumbnail?: string;
  detected_extensions?: Detected_Extentions;
  job_id?: string;
  related_links?: any;
}

interface Detected_Extentions {
  schedule_type: string;
  posted_at?: string;
}

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  const { title, company_name, location, description, detected_extensions, thumbnail, related_links } = job;

  return (
    <div className="bg-white group rounded-[4px] font-[roboto] p-3 grid grid-cols-[max-content_1fr] grid-rows-[max-content_max-content] border border-transparent lg:grid-cols-[max-content_1fr_max-content_max-content] lg:grid-rows-1 shadow-sm hover:border-blue-700 transition-colors">
      <Image
        src={thumbnail ? thumbnail : noImg}
        width={90}
        height={90}
        className="w-[90px] h-[90px] row-span-full rounded-[4px]"
        alt=""
      />
      <Link
        href={{ pathname: `/jobs/${title}`, query: { title, company_name, location, description, thumbnail, related_links } }}
        className="text-[#334680] ps-4">
        <h4 className="text-xs font-bold mb-1">{company_name}</h4>
        <h3 className="text-[16px] mb-2 group-hover:underline cursor-pointer">{title}</h3>
        {detected_extensions?.schedule_type?.includes("Full-time") && <div className="rounded-[4px] py-1 px-2 border border-[#334680] w-max text-xs font-bold ">Full time</div>}
      </Link>
      <div className="ps-4 flex lg:mt-0 mt-4 ">
        <div className="text-[#B7BCCE] flex items-end gap-2 ">
          <EarthIcon />
          <p className="font-[500] text-xs">{location}</p>
        </div>
        <div className="text-[#B7BCCE] flex items-end gap-2 ms-7 ">
          <WatchIcon />
          <p className="font-[500] text-xs">{detected_extensions?.posted_at ? detected_extensions.posted_at : "unknown date"}</p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
