import React from 'react'
import { Icon } from './Icon'
import { Button } from './Button'

const Sidebar = () => {
    return (
        <div className='bg-surface-container-low h-screen w-full'>
            <div className='flex items-center gap-2 p-[24px]'>
                <div className='bg-primary p-2 rounded-lg'><Icon className='text-on-primary' name='terminal' size='lg' /></div>
                <h1 className='text-2xl font-bold'>DevMate AI</h1>
            </div>
            <div className='px-[24px] pb-[24px]'>
                <Button variant='secondary' size='md' className='w-full'><Icon name='add' size='md' />New Chat</Button>
            </div>
        </div>
    )
}

export default Sidebar;