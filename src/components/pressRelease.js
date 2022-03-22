import {useState,useEffect} from 'react'
import { Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';

const pressStyles=makeStyles({

})

let PressRelease=()=>{
    let classes=pressStyles()
    return(
    <div className="testGrid" >
       
        <header className="header" >
      
      
      </header>
      
      <Link className="headPR" to="/" >Home</Link>
      
      
      <Link to="/about" className=" headText3 " >About</Link>
      
      <Link className="headChar headText2 " to="/Characters" >Characters</Link>
        
            <h1 className="prHead1" >The Story</h1>
            <p className="prPara1" >Michael's story unfolds with him searching through the web and coming across a young developer named Julian Borner online on LinkedIn. Michael goes to his website and is so enamored by the content and impressive body of work that he watches the video embedded into the site, explaining who Julian is and what he does. As he is browsing, Michael discovers the AR app that Julian has produced along with his resume and portfolio. Michael sends Julian's resume and portfolio to his hiring managers to be reviewed and follows Julian on social media. Julian posts that he'll be hosting a meet and greet Livestream for Michael to get to know him and understand some of his work. In the interim, further social media posts stating that additional projects and accomplishments are available for viewing on his site. Michael then prepares to attend the Livestream event and prepares his questions accordingly...</p>
        
        <video/>
        
            <h1 className="prHead2" >Livestream on April 11th</h1>
            <p className="prPara2" >Julian will be livestreaming on April 11th to answer any and all questions about him, his background and his potential place in your company. Don't forget to follow him on Instagram to receive updates until the livestream date and check out his code on GitHub. </p>
            <img className="prStream"  src={process.env.PUBLIC_URL+"streamyard.gif"} alt="Streamyard logo" />
        
        
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

export default PressRelease;