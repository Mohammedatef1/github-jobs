import Context from "@/context/Context";
import useJobs from "@/hooks/useJobs";
import React, { useContext } from "react";
import JobItem from "../ui/JobItem";
import Spinner from "../ui/Spinner";

interface Job {
  title?: string;
  company_name?: string;
  location?: string;
  via?: string;
  description?: string;
  thumbnail?: string;
  detected_extensions?: DetectedExtensions;
  job_id?: string;
}

interface DetectedExtensions {
  schedule_type: string;
}

const Jobs: React.FC = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error();
  }

  const { fulltime } = context;
  const { data: jobs, isLoading, isError, isFetching } = useJobs();

  if (isError) {
    return <h3 className="text-center text-xl font-semibold">Error!</h3>;
  }

  if (!jobs && !isFetching) {
    return <h3 className="text-center text-xl font-semibold">No Result!</h3>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const filteredJobs = fulltime && jobs ? jobs?.filter((job: Job) => job.detected_extensions?.schedule_type.includes("Full-time")) : jobs;

  console.log(jobs);
  console.log(filteredJobs);

  return (
    <div className="flex flex-col gap-8">
      {isFetching && <Spinner />}

      {!isFetching &&
        filteredJobs &&
        filteredJobs?.map((job: Job, index: number) => (
          <JobItem
            key={index}
            job={job}
          />
        ))}
    </div>
  );
};

export default Jobs;
