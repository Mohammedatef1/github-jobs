// hooks/useJobs.ts

import Context from "@/context/Context";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

interface Job {
  title: string;
  location: string;
}

const fetchJobs = async (query: string, location: string): Promise<Job[]> => {
  const response = await axios.get("/api/jobs", {
    params: {
      q: query || "java dev",
      ltype: "1",
      hl: "en",
      location,
    },
  });
  return response.data;
};

const useJobs = (): UseQueryResult<Job[], Error> => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useJobs must be used within a ContextProvider");
  }

  const { query, location } = context;

  return useQuery<Job[], Error>({
    queryKey: ["job"],
    queryFn: () => fetchJobs(query, location),
    enabled: !query,
  });
};

export default useJobs;
