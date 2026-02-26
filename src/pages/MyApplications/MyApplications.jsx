import React, { Suspense } from 'react'
import ApplicationStat from '../Shared/ApplicationStat'
import ApplicationList from './ApplicationList'
import useAuth from '../hooks/useAuth'
import { myApplicationsPromise } from '../api/applicationsApi'

const MyApplications = () => {

    const {user} = useAuth();
    //console.log(user);

  return (
    <div>
      <ApplicationStat></ApplicationStat>
      <Suspense fallback={'loading your applications...'}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
      </Suspense>
    </div>
  )
}

export default MyApplications
