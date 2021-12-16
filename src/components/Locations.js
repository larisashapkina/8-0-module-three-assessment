import { Component } from "react";
import "../App.css";

class Locations extends Component{
    constructor(){
        super();

        this.state={
            locations:[],
            display:true,
            locationName:"",
            locationClimate:"",
            locationTerrain:""
        }
    }
  
    fetchLocations=()=>{
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res=>res.json())
            .then ((data)=>{
                this.setState({
                    locations: data,
            })
        })
    }

    componentDidMount(){
        this.fetchLocations();
    }

handleClick=(e)=>{
    e.preventDefault();
    let name = this.state.locations.map((location)=>location.name).join(", ");
    let climate = this.state.locations.map((location)=>location.climate);
    let terrain = this.state.locations.map((location)=>location.terrain);
    this.setState({
        locationName: name,
        locationClimate: climate,
        locationTerrain: terrain
    })
}


  render(){
    //   let locationsToDisplay = this.state.locations.map((location)=>{
    //       return (
    //         <div>
    //         <li>Name: {location.name} </li>
    //         <li>Climate:{location.climate} </li>
    //         <li>Terrain:{location.terrain} </li>
    //       </div>
       
    //       )
    //   })
    //   console.log(locationsToDisplay);
    return (
      <div className="locations">
          <h1>List of Locations</h1>
            <button onClick={this.handleClick}>Show Locations</button>
            <ul>
                <li>
                     <strong>Name:</strong> {this.state.locationName}
                </li>
                <li>
                    <strong>Climate:</strong>{this.state.locationClimate}
                </li>
                <li>
                    <strong>Terrain:</strong>{this.state.locationTerrain}
                </li>  
            </ul>
      </div>
    );
  }
}

export default Locations;

  {/* {locationsToDisplay} */}

           {/* { this.state.display &&
                <button type="text" 
                onClick={locationsToDisplay}
                checked={this.state.display}>Show locations</button>
            }
            
            { !this.state.display &&
                <div>Thing is hidden</div>
            } */}