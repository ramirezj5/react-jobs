import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

// Side
const JobListings = ({ isHome = false }: { isHome: boolean }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect is a hook that enables performing side effects in functional components. It's similar to lifecycle methods in class components like componentDidMount, componentDidUpdate, and componentWillUnmount.
  // takes in a function and dependency array
  useEffect(() => {
    const apiUrl = isHome
      ? "http://localhost:8000/jobs?_limit=3"
      : "http://localhost:8000/jobs";
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error loading jobs", Error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <ClipLoader color="#4338ca" cssOverride={override} size={150} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job: { id: string }) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
