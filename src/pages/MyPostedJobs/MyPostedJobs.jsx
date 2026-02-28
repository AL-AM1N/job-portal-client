import React, { Suspense } from 'react'
import useAuth from '../hooks/useAuth'
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../api/jobsApi';

const MyPostedJobs = () => {

    const {user} = useAuth();

    console.log(user)

  return (
    <div>
      <h3> My posted jobs: </h3>
      <Suspense fallback={'loading...'}>
        <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobLists>
      </Suspense>
    </div>
  )
}

export default MyPostedJobs
