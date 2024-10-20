import Test from '@/components/dashboard/test'
import ClientComp from '@/components/dashboard/test/client-comp'
import ServerComp from '@/components/dashboard/test/server-comp'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <Test />
      <ClientComp>
        <ServerComp /> {/* ServerComp is still rendered on the server because it's being passed as a child of ClientComp but not directly used within it */}
      </ClientComp>
    </div>
  )
}

export default DashboardPage