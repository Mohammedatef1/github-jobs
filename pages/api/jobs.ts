// pages/api/jobs.ts
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next"; 

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q, location } = req.query;

  try {
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_jobs",
        q: q,
        api_key: process.env.SERP_API_KEY,
        location,
      },
    });

    res.status(200).json(response.data.jobs_results);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default handler;
