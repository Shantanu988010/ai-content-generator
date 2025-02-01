import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between bg-white items-center'>
        <div className='flex gap-2 items-center p-2  rounded-md max-w-lg bg-white'>
          <p>AI Content Generator</p>

        </div>
        <div>
          <UserButton/>
        </div>
      
    </div>
  )
}

export default Header
