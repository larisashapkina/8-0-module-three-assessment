import { Component } from "react";
import "../App.css";

class Movies extends Component{
    constructor(){
        super();

        
        this.state={
            movies:[],
            currentMovie: null
        }
    }
  
    fetchMovies=()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res=>res.json())
        .then ((data)=>{
            this.setState({
                movies: data,
            })
        })
    }

    componentDidMount(){
        this.fetchMovies();
    }

    handleDropDownChange=(event)=>{
        this.setState({
            currentMovie:event.target.value
        })
    }

  render(){
    let dropDownOption = this.state.movies.map((movie)=>{
        return <option value={movie.title}>{movie.title}</option>
    })

    let currentMovieObject = this.state.movies.find((movie)=>{
        return movie.title === this.state.currentMovie
    })
    return (

      <div className="movies">
          <h1>Select a Movie</h1>
          <select onChange={this.handleDropDownChange}>
              <option></option>
              {dropDownOption}
          </select>
            <h1>Title: {currentMovieObject ? currentMovieObject.title : null}</h1>
            <h2>Release Date: {currentMovieObject?.release_date}</h2>
            <h3>Description: {currentMovieObject?.description}</h3>
      </div>
    );
  }
}

export default Movies;