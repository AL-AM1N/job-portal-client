import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  console.log(job);

  const {
    title,
    location,
    jobType,
    category,
    description,
    salaryRange,
    company,
    company_logo,
    _id,
    requirements,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-10 border border-amber-200">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h3>{company}</h3>
          <p className="flex items-center gap-2">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((requirement, index) => (
            <div key={index} className="badge badge-outline">
              {requirement}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
