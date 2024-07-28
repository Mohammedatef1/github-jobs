import Image from "next/image";
import Link from "next/link";
import noImg from "../../assets/no image.jpg";
import ArrowIcon from "../icons/ArrowIcon";
import EarthIcon from "../icons/EarthIcon";
import WatchIcon from "../icons/WatchIcon";

interface JobPageProps {
  title: string | string[] | undefined;
  description: string | string[] | undefined;
  company_name: string | string[] | undefined;
  location: string | string[] | undefined;
  thumbnail: string;
  related_links: any;
}

const JobPage: React.FC<JobPageProps> = ({ title, description, company_name, location, thumbnail, related_links }) => {
  return (
    <div>
      <h2 className="font-[poppins] font-bold text-[#282538] text-2xl">
        Github <span className="font-[300] ">Jops</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-9 my-8">
        <div className="font-[poppins]">
          <Link href="/">
            <div className="flex items-center gap-x-3 cursor-pointer ">
              <ArrowIcon />
              <button className="border-none text-[#1E86FF] text-sm  hover:underline font-[500]">Back to search</button>
            </div>
          </Link>
          <h3 className="uppercase text-[#B9BDCF] text-sm font-bold mt-7">How to apply</h3>
          {
            <a
              href={related_links[0]?.text}
              className="mt-4 text-sm font-[500] text-[#334680]">
              {related_links[0]?.text}
            </a>
          }
        </div>
        <div className="font-[roboto] text-[#334680]">
          <div className="flex items-center gap-x-6">
            <h2 className="font-bold text-2xl ">{title}</h2>
            <div className="rounded-[4px] py-1 px-2 border border-[#334680] w-max text-xs font-bold ">Full time</div>
          </div>
          <div className="text-[#B7BCCE] flex items-end gap-2 mt-2 ">
            <WatchIcon />
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
                <EarthIcon />
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
