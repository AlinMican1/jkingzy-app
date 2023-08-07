import React from 'react'
import './footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTiktok , faInstagram} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'

      
const Footer = () => {
  return (
  
  <footer>
   
<div className="row primary">
<div className="social">
    
  </div>
  <div className="column about">

  <h3>TheKingzAce</h3>

   <p>
      "You must develp personal contacts if you want to be successful." -Armstrong Williams
  </p>

  <div className="social">
    <Link href={"https://www.youtube.com/@TheKingzAce"}>
      <i className="fa-brands fa-youtube-square">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
      </i>
    </Link>
    <Link href={"https://www.tiktok.com/@thekingzace"}>
    <i className="fa-brands fa-instagram-square">
        <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
    </i>
        </Link>
    <Link href={"https://www.instagram.com/thekingzace/"}>
            <i className="fa-brands fa-instagram-square">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </i>
      </Link>
   
  </div>
</div>

<div className="column links">
<h3>Contact</h3>

 <ul>
  <li>
  <p><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /> thekingzacebusiness@gmail.com</p>
  </li>
  <li>
   <p>Fiverr: @thekingzace</p>
  </li>
 </ul>
</div>
</div>
<div className="row copyright">
  <div className="footer-menu">

  </div>
   <p>Copyright &copy; 2023 TheKingzAce</p>
</div>
</footer>
        
    
  )
}

export default Footer