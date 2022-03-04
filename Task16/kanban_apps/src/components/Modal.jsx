import React, { useState } from "react";

export default function Modal ()
{
    const [ showModal, setShowModal ] = useState( false );
    const [ task, setTask ] = useState( '' )


    const saveTask = () =>
    {
        console.log( task );
        setShowModal( false )
        setTask( '' )
    }


    return (
        <>
            <button
                className="bg-blue-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={ () => setShowModal( true ) }
            >
                Add Task
            </button>
            { showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-3/6 my-6 mx-auto max-w-3xl">
                            {/*content*/ }
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/ }
                                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        Add Your Task in here
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={ () => setShowModal( false ) }
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/ }
                                <div className="relative p-6 flex-auto">
                                    <label className="block w-full">
                                        <span className="text-gray-700">Your Task Add Here</span>
                                        <input
                                            type="text"
                                            value={ task }
                                            onChange={ ( e ) => setTask( e.target.value ) }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            placeholder=""
                                        />
                                    </label>
                                </div>
                                {/*footer*/ }
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={ () => setShowModal( false ) }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={ saveTask }
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}
