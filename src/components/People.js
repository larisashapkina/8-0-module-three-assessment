import { Component } from "react";
import "../App.css";

class People extends Component{

    constructor(){
        super();
        this.state={
            people:[],
            searchInput:"",
            searchedPeople:""
        }
    }
  
    fetchPeople=()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res=>res.json())
        .then ((data)=>{
            this.setState({
                people: data,
                
            })
        })
    }

    componentDidMount(){
        this.fetchPeople();
    }

    handleInput=(e)=>{
        this.setState({
            searchInput: e.target.value
        })
    }

    handleSearch=(e)=>{
        e.preventDefault();
    
    }

  render(){
    return (
      <div className="people">
          <h1>Search for a Person</h1>
          <form onSubmit={this.handleSearch}>
              <input type="text" placeholder="Find Your Person" onChange={this.handleInput} value={this.state.searchInput}></input>
              <button>Submit</button>
          </form>
      </div>
    );
  }
}

export default People;