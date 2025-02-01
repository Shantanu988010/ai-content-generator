"use client"
import { UserButton } from '@clerk/nextjs'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)

    },[])

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'

        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'

        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'

        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'

        },
    ]
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={50} height={60}/>
        </div>
        <hr className='my-9 border '/>
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <div  key={index} className={`flex gap-2 mb-3 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                ${path==menu.path&&'bg-primary text-white'}
                `}>
                    <menu.icon className='h-6 w-61'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default SideNav
