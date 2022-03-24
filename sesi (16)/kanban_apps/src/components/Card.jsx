import React from 'react'

const Card = ( { title, forward, back, deletes } ) =>
{
    return (
        <div className='w-60 mt-5 ml-5'>
            <div className='max-w-md p-5 border flex flex-col border-gray-200 rounded-lg text-center shadow-md align-center'>
                <h1 className='text-xl'>{ title }</h1>
                <div className='border mt-5 border-blue-600 rounded-md'>
                    <div className='text-sm text-left p-3'>
                        Task 1
                    </div>
                    <div className='flex flex-row justify-between my-3 mx-1 text-white'>
                        <button className='bg-gray-700 p-2 rounded-md' onClick={ forward }>Forward</button>
                        <button className='bg-gray-700 p-2 rounded-md' onClick={ back }>Back</button>
                        <button className='bg-gray-700 p-2 rounded-md' onClick={ deletes } >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card