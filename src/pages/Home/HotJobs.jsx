import React, { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  console.log(jobs);

  return (
    <div>
      <h2 className="text-4xl text-center p-10">Hot jobs of the day</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
