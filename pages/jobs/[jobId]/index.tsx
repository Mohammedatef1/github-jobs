import { useRouter } from "next/router";

const JobDetails = () => {
  const router = useRouter();
  const { jobId } = router.query;

  if (!jobId) {
    return null;
  }

  return <div>{jobId}</div>;
};

export default JobDetails;
