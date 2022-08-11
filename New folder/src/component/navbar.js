import React from "react";
import {Link} from "react-router-dom"

 function Navbar(){
    return(
<>
<nav>
    <ul>
        <Link to="/"> calculator</Link>
        <Link to="/about"> About</Link>
        <Link to="/story"> Stroy</Link>


    </ul>
</nav>

</>
    )

 }
  
 export default Navbar
