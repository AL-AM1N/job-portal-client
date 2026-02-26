import React, { use } from "react";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams(); // I'll get an object where the job circular ID is present.
  console.log(jobId);

  const { user } = useAuth(); // useAuth akta object return kore, jar moddhe user information ase
  console.log(user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;

    console.log(linkedIn, gitHub, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      gitHub,
      resume,
    };

    // using axios to pass the data from client side to serverside
    axios
      .post("http://localhost:3000/applications", application)
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
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <h3 className="text-4xl text-center">
        Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link>
      </h3>
      <form
        onSubmit={handleApplyFormSubmit}
        className="flex w-full justify-center items-center p-6"
      >
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
