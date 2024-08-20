import Footer from "@/components/layout/Footer";
import JobPage from "@/components/layout/JobPage";
import { useRouter } from "next/router";

const JobDetails = () => {
  const router = useRouter();
  const { jobId, title, company_name, location, description, thumbnail, related_links } = router.query;

  if (!jobId) {
    return null;
  }

  return (
    <main className="lg:px-28 lg:py-8 md:px-20 md:py-6 p-3 ">
      <JobPage
        thumbnail={thumbnail as string}
        title={title}
        company_name={company_name}
        location={location}
        description={description}
        related_links={related_links}
      />
      <Footer />
    </main>
  );
};

export default JobDetails;
