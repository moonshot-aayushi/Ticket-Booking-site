import React from 'react';
import './EventLinkForm.css'


const EventLinkForm = ({searchfield, searchChange}) => {
    return (
     <div>
     <p className='center f3'>
     {'Grab your tickets to the coolest Robo carnival in town!'}</p>
     <div className='center'>
     <div className='form pa2 br3 shadow-5 center'>
     <input className='f4 pa2 w-50 center' type='search' placeholder='Search for new robots' onChange = {searchChange}/ >
     <button className='w-15 grow f4 link ph3 dib white bg-purple center'>Search</button>
     </div>
     </div>
     </div>
    );
}

export default EventLinkForm;