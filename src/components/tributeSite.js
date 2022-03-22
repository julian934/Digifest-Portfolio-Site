import React from 'react'
import stan from '../components/stan.jpg'
import marvelTheme from '../videos/MarvelTheme.mp4'

let MyComponent=()=>{
    return(
    <div className='container'>
    <video className="backgroundVidCss" loop autoPlay muted src={marvelTheme} />
            
    <a className="imgCssOver" href="https://stanleefoundation.org/" >
     <img className='imgCss'  src={stan} alt='stan lee'  />
    </a>

    <h1 className="notify" >Click Stan Lee to go to the Stan Lee Foundation page.</h1>
    
    <h1 className=" headGrid1 subHeaderCss titleCss" >The Illustrious Life Of Stan Lee</h1>
    <h2 className=" headGrid2 subHeaderCss titleCss2 " >Father of superheroes and maker of legends</h2>

   
    <body className=" timelineCss timelineGrid "  >
       <p className="sub-titleCss  " >Timeline of Stan Lee's life:</p>
        <ul className="timelineBorder" >
         <li className="listCss" ><strong>December 28th,1922</strong>: Stan Lee is born</li>
         <li className="listCss" ><strong>1939</strong>: Stan Lee begins working at Timely Comics</li>
         <li className="listCss" ><strong>1941</strong>: Stan Lee makes his writing debut with text-filler "Captain America Foils the Traitor's Revenge", under the pseudonym "Stan Lee"</li>
         <li className="listCss" ><strong>1942</strong>: Stan Lee joins the US Army as a member of the signal Corps</li>
         <li className="listCss" ><strong>1947</strong>: Stan Lee gets married to Joan Clayton Boocock</li>
         <li className="listCss" ><strong>1950s</strong>: Stan Lee begins working at Atlas Comics</li>
         <li className="listCss" ><strong>1961</strong>: Stan Lee teams up with Jack Kirby to create the Fantastic Four and found Marvel.</li>
         <li className="listCss" ><strong>1963</strong>: Stan Lee creates the Avengers, reviving characters such as Captain America and the Sub-Mariner.</li>
         <li className="listCss" ><strong>1972</strong>: Stan Lee becomes publisher and creates his final issues of the Amazing Spider-Man and Fantastic Four.</li>
         <li className="listCss" ><strong>2001</strong>: Stan Lee releases his first work for DC comics, titled "Just Imagine" where he reimagines Superman, Batman, Wonder Woman, Green Lantern and Flash.</li>
         <li className="listCss" ><strong>2008</strong>: Stan Lee receives the National Arts Medal from President George Bush.</li>
         <li className="listCss" ><strong>2010</strong>: Stan Lee foundation is founded, which focuses on literacy, education and the arts. The foundation provides access to literary resources and promotes diversity.</li>
         <li className="listCss" ><strong>2016</strong>: Stan Lee releases the graphic novel "God Woke", which won the 2017 Independent Publisher Book Awards' Outstanding Books of the Year Independent Voice Award.</li>
         <li className="listCss" ><strong>2018</strong>: Stan Lee passes away at 95, six week sbefore his 96th Birthday.</li>
       </ul>
    </body>
    
    <footer>



    </footer>
    
    
    </div>)
}


export default MyComponent;