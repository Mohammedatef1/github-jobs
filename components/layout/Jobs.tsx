import Context from "@/context/Context";
import useJobs from "@/hooks/useJobs";
import { useContext } from "react";
import JobItem from "../ui/JobItem";
import Spinner from "../ui/Spinner";

const Jobs = () => {
  const { fulltime } = useContext(Context);

  const { data: jobs, isLoading, isError, isFetching } = useJobs();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  const filteredJobs = fulltime ? jobs?.filter((job) => job.detected_extensions.schedule_type.includes("Full-time")) : jobs;

  return (
    <div className=" flex flex-col gap-8">
      {isFetching && <Spinner />}
      {!isFetching &&
        filteredJobs?.map((job, index) => (
          <JobItem
            key={index}
            job={job}></JobItem>
        ))}
    </div>
  );
};

export default Jobs;
