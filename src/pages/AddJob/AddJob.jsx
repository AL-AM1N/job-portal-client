import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    //console.log(data);

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    //process requirements
    const requirementsString = newJob.requirements;
    //console.log(requirementsString);

    const requirementsDirty = requirementsString.split(",");
    //console.log(requirementsDirty)

    const requirementsClean = requirementsDirty.map((req) => req.trim());
    //console.log(requirementsClean);
    newJob.requirements = requirementsClean;

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";

    console.log(newJob);

    // save job to the database
    axios
      .post('http://localhost:3000/jobs', newJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your application has been submitted",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-4xl w-full text-center">Please add a job</h2>
      <form onSubmit={handleAddAJob}>
        <div className="flex flex-col w-full justify-center items-center p-6">
          <fieldset className="flex flex-col justify-center items-center fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <legend className="fieldset-legend">Basic Info</legend>

            <label className="label">Job Title</label>
            <input
              type="text"
              className="input"
              name="title"
              placeholder="Job Title"
            />

            <label className="label">Company</label>
            <input
              type="text"
              name="company"
              className="input"
              placeholder="Company Name"
            />

            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input"
              placeholder="Company Location"
            />

            <label className="label">Company Logo</label>
            <input
              type="text"
              name="company_logo"
              className="input"
              placeholder="Company Logo URL"
            />
          </fieldset>

          {/* job type */}
          <fieldset className="fieldset bg-base-200 border-base-300 flex flex-col justify-center items-center w-full rounded-box  border p-4">
            <legend className="fieldset-legend">Job Type</legend>

            <div className="filter">
              <input className="btn btn-square" type="reset" value="×" />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="On-Site"
                value="On-Site"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Remote"
                value="Remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Hybrid"
                value="Hybrid"
              />
            </div>
          </fieldset>

          {/* job category */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Job Category</legend>
            <select
              defaultValue="Job Category"
              name="category"
              className="select"
            >
              <option disabled={true}>Job Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </fieldset>

          {/* Application Deadline */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Application Deadline</legend>
            <input type="date" name="deadline" className="input" />
          </fieldset>

          {/* Salary Range */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="label">Minimum Salary</label>
                <input
                  name="min"
                  type="text"
                  className="input"
                  placeholder="Minimum Salary"
                />
              </div>

              <div>
                <label className="label">Maximum Salary</label>
                <input
                  name="max"
                  type="text"
                  className="input"
                  placeholder="Maximum Salary"
                />
              </div>

              <div>
                <label className="label">Currency</label>
                <select
                  defaultValue="Select a Currency"
                  name="currency"
                  className="select"
                >
                  <option disabled={true}>Select a Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Job Description */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Job Description</legend>
            <textarea
              name="description"
              className="textarea"
              placeholder="Job Description"
            ></textarea>
          </fieldset>

          {/* Job Requirements */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Job Requirements</legend>
            <textarea
              name="requirements"
              className="textarea"
              placeholder="Job Requirements (separate by comma)"
            ></textarea>
          </fieldset>

          {/* Job Responsibilities */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Job Responsibilities</legend>
            <textarea
              name="responsibilities"
              className="textarea"
              placeholder="Job Responsibilities (separate by comma)"
            ></textarea>
          </fieldset>

          {/* HR Related Info */}
          <fieldset className="flex flex-col justify-center items-center w-full fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">HR Related Info</legend>

            <label className="label">HR Name</label>
            <input
              type="text"
              className="input"
              name="hr_name"
              placeholder="HR Name"
            />

            <label className="label">HR Email</label>
            <input
              type="email"
              name="hr_email"
              className="input"
              placeholder="HR Email"
              defaultValue={user.email}
            />
          </fieldset>
          <input type="submit" className="btn" value="Add Job" />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
