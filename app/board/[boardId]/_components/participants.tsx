import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function Participants() {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
     list of participants
    </div>
  )
}

export default Participants


Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]'/>
    
  )
}