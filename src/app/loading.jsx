import React from 'react'

export default function loading() {
    return (
        <div className='flex justify-center items-center h-screen flex-col bg-gray-100'>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            <p className='text-gray-700 mt-4'>Loading...</p>
        </div>
    )
}
