import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrganizationProfile } from '@clerk/nextjs'
import React from 'react'
import { Plus } from 'lucide-react'
function InviteButton() {
  return (
      <Dialog>
          <DialogTrigger>
              <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2"/>Invite members</Button>
          </DialogTrigger>
          <DialogContent className='p-0'><OrganizationProfile/></DialogContent>
    </Dialog>
  )
}

export default InviteButton
