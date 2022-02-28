import React, { useEffect } from 'react'
import Konten from '../components/Konten';

const Experience = () =>
{
    const pageTranstition = () =>
    {
        var elements = document.getElementById( "container" );
        elements.classList.add( "animate-bottom" );
        setTimeout( function () { elements.classList.remove( "animate-bottom" ); }, 1000 );
    }
    useEffect( () =>
    {
        pageTranstition()
    }, [] );

    return (
        <div id='container'>
            <Konten
                myKonten={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan enim nisl, id iaculis nisl eleifend vel. Sed congue pulvinar imperdiet. Phasellus tempus turpis eget tortor porta, a tincidunt libero blandit. Nulla facilisi. Vestibulum sollicitudin ipsum justo, id imperdiet risus feugiat nec. Donec in urna ipsum. Donec nec elit libero. Suspendisse quis augue rutrum, sodales tortor quis, varius arcu. Duis hendrerit a tortor ut condimentum. Donec ultrices urna elit, sed imperdiet ante vestibulum ut. Sed sed odio ultricies, fringilla velit tempor, congue ligula. Maecenas rutrum augue vel ligula posuere, at dignissim ex suscipit. Nulla scelerisque arcu purus. Phasellus sagittis velit non turpis feugiat, ac commodo risus ornare. Cras vel magna lorem. Pellentesque pulvinar ligula at dapibus varius. Donec luctus erat posuere mi aliquet, ac accumsan enim vestibulum. Curabitur eget egestas erat. Fusce finibus finibus nunc. Nullam nec augue a enim faucibus dapibus nec quis turpis. Aliquam non felis leo. Suspendisse mollis mauris sed interdum placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam et nisl nec turpis pellentesque posuere in non erat. Nullam feugiat tempus lobortis' }
                subContent={ 'My Name is Ilham Prasetya' }
                titleContent={ 'My Journey and My Experience' } />
        </div>
    )
}

export default Experience