import React from 'react'
import "./Navbar.css"
// import Game from '../Game/Game';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';
import TopSection from './TopSection';
import MiddleSection from './middleSection';
// import discort from "./discort.png"

function Navbar() {
 return (
  <div class="overee">
   <div className='head' >
    <nav class="navbar navbar-expand-xl navbar-dark p-4">
     <div class="container-fluid" data-aos="zoom-out-down" ease-in-sine="ease-in" >
      <a class="navbar-brand" href="javascript:void(0)" >
       <img src='https://kleerun.game/images/logo-dark.png' />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
       <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
       <ul class="navbar-nav ms-auto me-auto">
        <li class="nav-item">
         <a class="nav-link" href="javascript:void(0)" classID="home">Home</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="ourteam" classID="ourteam">Our team</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="javascript:void(0)">Tokennomics</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="javascript:void(0)">Roadmap</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="javascript:void(0)">Whitepaper</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="javascript:void(0)">Dextools</a>
        </li>
       </ul>
       <form class=" d-flex">
        <div className='navbar-icon'>
         <a href='#'><InstagramIcon /></a>
         <a href='#'><TwitterIcon /></a>
         <a href='#'><RedditIcon /></a>
         <a href='#'><TelegramIcon /></a>
         <svg className='discort' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
         </svg>
        </div>
        <div className="navbar-icon1">
         <button className='BuyBTN'>BUY $KLEE NOW</button>
        </div>

       </form>
      </div>
     </div>
    </nav>
    <div >
     <TopSection />
    </div>
   </div>
   <div className='middle'>
    <MiddleSection />
   </div>

  </div>
 )
}

export default Navbar