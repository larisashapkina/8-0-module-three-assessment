import { Component } from "react";
import { Link } from "react-router-dom"
import "../App.css";

class NavBar extends Component{
  
  render(){
    return (
      <div className="nav">
        <nav>
            <Link to ="/">
            <img
              className="pet-logo"
              src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
              alt="pet logo"/>
            </Link>
            <Link to ="/movies">Movies</Link>
            <Link to ="/people">People</Link>
            <Link to ="/locations">Locations</Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;