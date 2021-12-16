import { Component } from "react";
import "../App.css";

class Locations extends Component{
    constructor(){
        super();


        this.state={

        }
    }
  
  render(){
    return (
      <div className="locations">
          <h1>List of Locations</h1>
          <button>Show locations</button>
      </div>
    );
  }
}

export default Locations;