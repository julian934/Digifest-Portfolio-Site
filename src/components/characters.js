import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';

const charStyles=makeStyles({

})

let Characters=()=>{
    let classes=charStyles()
    return(
    <div className="testGrid" >
        
        <header className="header" >
      
      
      </header>
      
      <Link className="headPR" to="/PressRelease" >PR</Link>
      
      <a href="/about" alt="about" className="headAB" >About</a>
      <Link to="/about" className="headAB" >About</Link>
      
      <Link className="headChar headText " to="/" >Home</Link>
        
        <h1 className="charHead" >Character Backstory</h1>
        <img className="charJulian" src={process.env.PUBLIC_URL+"Julian Borner Headshot.jpg"} alt="Julian"/>
        <p className="charP1" >Julian Borner is a Junior Web Developer from Texas with a specialization in front-end engineering. He is eager for a chance to put his skills to work for a company that wants a fresh face with fresh ideas and solid work ethic.</p>
        <img className="charCEO" src={process.env.PUBLIC_URL+"ClarenceOtisJr..jpg"} alt="CEO"/>
        <p className="charP2" >Michael is a CEO of a new software development company. Michael has found out that his newfound success brings newfound problems. As the company's projects scale up in size, so does the need for manpower and new skilled labor. In his off-time, Michael searches through LinkedIn, GitHub, and many other professional networking sites looking for his next generation of developers to help usher in a new day for his company. After weeks of searching, Michael comes across a young developer from Houston, Texas that catches his eye...</p>
        
        <footer className="footer1">
                   

      </footer>
      <div className="contact1" >
            Contact:

        
      </div>
      <div className="contact2" >
      <a href="#" alt="contact info"  >Github</a>/<a href='#' alt='contact info' >Instagram</a>
      </div>
      <div className="legal1" >
         Legal:
        
       </div> 
       <a  className="legal2" href="#" alt='privacy policy' >Privacy Policy</a>
    </div>
    )
}

export default Characters;