import { Component } from "react";
import "../App.css";

class People extends Component{

    constructor(){
        super();
        this.state={
            people:[],
            searchInput:"",
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
        e.preventDefault();
        this.setState({
            searchInput: e.target.value
        })
    }

    // handleSearch=(e)=>{
    //     e.preventDefault(); 
    // }

  render(){
      let peopleList = this.state.people.map((person)=>{
          if(person.name === this.state.searchInput){
            return(
                <div>
                    <div>Name:{person.name}</div>
                    <div>Age:{person.age}</div>
                    <div>Gender:{person.gender}</div>
                </div>
            )
          }
      })
    return (
      <div className="people">
          <h1>Search for a Person</h1>
          <form onSubmit={this.fetchPeople}>
              <input type="text" placeholder="Find Your Person" onChange={this.handleInput} value={this.state.searchInput}></input>
              <button>Submit</button>
              <div>{peopleList}</div>
          </form>
      </div>
    );
  }
}

export default People;