import React from "react";

const AddJob = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center p-6">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Type</legend>

        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn"
            type="radio"
            name="jobType"
            aria-label="On-Site"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            aria-label="Remote"
          />
          <input
            className="btn"
            type="radio"
            name="jobType"
            aria-label="Hybrid"
          />
        </form>
      </fieldset>

      {/* job category */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Job Category</legend>
        <select defaultValue="Job Category" name="category" className="select">
          <option disabled={true}>Job Category</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
        </select>
      </fieldset>

      {/* Application Deadline */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Application Deadline</legend>
        <input type="date" className="input" />
      </fieldset>

      {/* Salary Range */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Salary Range</legend>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <label className="label">Minimum Salary</label>
            <input type="text" className="input" placeholder="Minimum Salary" />
          </div>

          <div>
            <label className="label">Maximum Salary</label>
            <input type="text" className="input" placeholder="Maximum Salary" />
          </div>

          <div>
            <label className="label">Currency</label>
            <select
              defaultValue="Select a Currency"
              name="category"
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

      {/* Application Deadline */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>
      </fieldset>

      {/* Application Deadline */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>
      </fieldset>

      {/* Application Deadline */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Basic Info</legend>
      </fieldset>
    </div>
  );
};

export default AddJob;
