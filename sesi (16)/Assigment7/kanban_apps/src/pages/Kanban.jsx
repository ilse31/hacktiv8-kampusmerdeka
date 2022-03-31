import React from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'

const Kanban = () =>
{
    return (
        <>
            <Modal />
            <div className='flex justify-around h-screen'>
                <Card title={ 'Backlog' } />
                <Card title={ 'Doing' } />
                <Card title={ 'Evaluation' } />
                <Card title={ 'Done' } />
            </div>
        </>
    )
}

export default Kanban