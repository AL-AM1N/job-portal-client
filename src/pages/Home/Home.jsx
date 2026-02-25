import React, { Suspense } from 'react'
import Banner from './Banner'
import HotJobs from './HotJobs'

function Home() {

  const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<h3>Loading...</h3>}>
        <HotJobs jobsPromise = {jobsPromise}></HotJobs>
      </Suspense>
    </div>
  )
}

export default Home
