import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
    return ( 
        <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Spinner animation="border" variant="success" />
        </div>
     );
}
 
export default Loading;