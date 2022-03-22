import React,{useState} from 'react';
import {Link} from 'react-router-dom'

let fullList=()=>{
    return(
    <div className="testGrid" >
        <h1 className="ListHeader1" >Full List</h1>
       
        
        
        <Link className="ListSade" to="/Sade" >Sade Portrait</Link>
        
        <Link className="ListV12" to="/v12" >V12 Engine Rendering</Link>
        
        <Link className="ListTribute" to="/TributeSite" >Stan Lee Tribute Site</Link>
        
        

    </div>
    )
}

export default fullList;