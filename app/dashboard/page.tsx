"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

  const[userSearchInput,setUserSearchinput] = useState<string>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchinput(value)}/>

      {/* Template section  */}
      <TemplateListSection userSearchInput = {userSearchInput}/>
      
    </div>
  )
}

export default Dashboard
