import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import {flexbox} from '@material-ui/system';
import {makeStyles} from '@material-ui/core/styles';
import { requirePropFactory } from '@material-ui/core';
import TerzoMillennio from '../images/Terzo Millennio.jpg'
import Stan from '../images/Stan Lee Screenshot.jpg';
import Sade from '../images/Sade(Portfolio).jpg'



const style=makeStyles({
    root:{
        
        height:'100vh',
        width:'100vh',
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gridTempalateRows:'repeat(4,1fr)'

    },
    header:{
        

        
    },
    footer:{
        display:'flex',
        backgroundColor:'goldenrod',
        height:'50px',
        alignSelf:'flex-end',
        justifyContent:'center'
    },
    hItemTest:{
        color:'white',
        justifyContent:'flex-end'
    },
    headGrid:{
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gridTemplateRows:'repeat(4,1fr)'
    },
    headText:{
        
    },
    headName:{
      

       
    },
    headPR:{
        
    },
    logo:{
        
        
    },
    head1:{
        
        
    },
    head2:{
        
    },
    homeBody:{
        
        
    },
    bHead:{
        
    },
    streamYard:{
        
    },
    footer1:{
        
        

    },
    bodyGrid:{
        
    },
    bHead2:{
        
    }

})


let Home=()=>{

   let classes=style()
    return(  
    <div className="testGrid testGrid-s " >
        <link rel="stylesheet" media="screen and (max-width: 1125px)" href="App.css" />
        
      <header className="header" >
      
      
      </header>
      
      <Link className="headPR headPR-1 " to="/PressRelease" >PR</Link>
      
      

      <Link to="/about" className="headAB" >About</Link>
      
      <Link className="headChar" to="/Characters" >Characters</Link>

      <h1 className="desktopPreview" >Desktop Preview-Mobile Site will go live on April 11th. New updates on Instagram daily. 
      </h1>
                
      <p className="head1 head1-s " >My name is Julian</p>
      <p className="head2" >I make websites</p>
      <p className="homeBody" >I'm a junior front-end developer and designer from Houston, Texas.</p>
      <img className="logo"  src={process.env.PUBLIC_URL+"Julian Borner Logo.png"} alt='logo'/>
      <img className="homeStan" src={Stan} alt="Stan Lee" />
                
      <img className="homeTerzo homeTerzo-s " src={TerzoMillennio} alt="Lamborghini" />
      <h1 className="bHead" >Projects</h1>
      
      <a className="pI1" href="/TributeSite" alt="Tribute" >Stan Lee Tribute Page</a>
      <img className="homeSade" src={Sade} alt="Sade" />
      <Link className="pI2" to="/Sade" >Sade'</Link>
      
      <a className="pI3" href="/Millennio" alt="Lamborghini" >Lamborghini Rendering</a>
      <Link className="seeMore"  to="/List" >See More From Julian</Link>
      <Link className="dontForget" >Don't forget to catch the Livestream on April 11th</Link>
      
      <audio/>
      
                
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
export default Home;