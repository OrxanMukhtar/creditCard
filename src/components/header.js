import React from 'react';
import { Link} from "react-router-dom";


function header() {
  return (
    <div>
    <div className='header'>
      
      <nav className='nav container'>
        <h1 className='h1Logo'>
          <Link to={"/"}>Logo</Link>
        </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
      </nav>
      

      
    </div>
    </div>
)
}

export default header
