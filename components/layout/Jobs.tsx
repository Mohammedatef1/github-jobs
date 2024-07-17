// components/Jobs.tsx
import React, { useContext } from "react";
import useJobs from "@/hooks/useJobs";
import Context from "@/context/Context";
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

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  const filteredJobs = fulltime ? jobs?.filter((job: Job) => job.detected_extensions?.schedule_type.includes("Full-time")) : jobs;

  return (
    <div className="flex flex-col gap-8">
      {isFetching && <Spinner />}
      {!isFetching &&
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
