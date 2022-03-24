import React from 'react'

const Konten = ( { titleContent, subContent, myKonten } ) =>
{
    return (
        <div className='main-content'>
            <h1>{ titleContent }</h1>
            <h4>{ subContent }</h4>
            <p>{ myKonten }</p>
        </div>
    )
}

export default Konten