import React from 'react'

export default function Container({ children }) {
    return (
        <div className='w-full bg-black h-full text-white min-h-[84vh]'>
            <div className='container mx-auto py-4'>
                {children}
            </div>
        </div>
    )
}
