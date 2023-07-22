import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css'
 
const Loading = ( {type, color} ) => (
    <div className='loading-div'>
       <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
    </div>
);
 
export default Loading;