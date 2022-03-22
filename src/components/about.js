import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';

const styles=makeStyles({

})


let About=()=>{
     let classes=styles()

    return(
    <div className="testGrid" >
            <header className="header" >
      
      
      </header>
        
            
            <Link className="headAB" to="/" >Home</Link>
            <Link className="headPR" to="/PressRelease" >PR</Link>
            <Link className="headChar" to="/Characters"  >Characters</Link>
        
            <h1 className="aboutHead1" >About the Campaign</h1>
            <p className="campaignP" >This media campaign documents the story of a CEO named Michael who journeys through the web to find new developers to be the future of his growing company and finding a young developer by the name of Julian Borner who might be the answer to his problems. </p>
            <img className="imageAb" src={process.env.PUBLIC_URL+"Julian Borner Headshot.jpg"} alt="Julian" />
            <h1 className="headAb" >Who is Julian?</h1>
            <p className="headAb2" >Julian Borner is a junior developer from Houston, Texas who is knowledgeable in Html,CSS, and Javascript coding languages. Julian codes with the React development framework and specializes in web design and front-end development, with skill in CRUD operations to display data from the server to the front-end. </p>
        
           
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

        


    </div>)
}

export default About;