"use client"
import { useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/EmptyOrg"

const DashboardPage = () => {
    const {organization}=useOrganization()
    return (
        <div className="flex-1 p-6 h-[calc(100%-80px)]">
            {!organization ? (
                 <EmptyOrg/>
            ) : (
                    <p>Board List</p>
          )} 
        </div>
    )
}
export default DashboardPage