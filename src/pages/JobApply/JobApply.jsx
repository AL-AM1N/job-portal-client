import React, { use } from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams(); // I'll get an object where the job circular ID is present.
  console.log(jobId);

  const { user } = useAuth(); // useAuth akta object return kore, jar moddhe user information ase
  console.log(user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const githHub = form.gitHub.value;
    const resume = form.resume.value;

    console.log(linkedIn, githHub, resume);
  };

  return (
    <div className="">
      <h3 className="text-4xl">Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link></h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input"
            name="linkedIn"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="gitHub"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
