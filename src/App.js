import React, { Component } from 'react'
import Search from "./Components/Search"
import "./App.css"

export default class App extends Component {
  
  
  constructor(props) {
    super(props)
  
    this.state = {
       movies : [],
       Moviename : "",
       Searchapi : "https://api.themoviedb.org/3/search/movie?&api_key=846f93bab31f45143b62ee05869a32a0&query="
     //  MOVIE_API  : "https://api.themoviedb.org/3/movie/550?api_key=846f93bab31f45143b62ee05869a32a0"
    }
   // console.log("inside const");
  }
  

  /*  https://api.themoviedb.org/3/discover/movie?
  api_key=846f93bab31f45143b62ee05869a32a0&language=en-US&sort_by=popularity.desc&include_adult=
  false&include_video=false&page=1*/ 


  /* https://api.themoviedb.org/3/genre/movie/list?api_key=846f93bab31f45143b62ee05869a32a0 */ 
componentDidMount() {


fetch("https://api.themoviedb.org/3/discover/movie?api_key=846f93bab31f45143b62ee05869a32a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
.then(data => data.json())
.then(data => 
  {

    //console.log(data.results)
    this.setState({
movies : data.results

    });
    //console.log("inside mount");
  } )

  this.handleSubmit =this.handleSubmit.bind(this);
  this.handleChange =this.handleChange.bind(this);
}
  

handleChange(e) {

  this.setState({
Moviename : e.target.value

  })
}
handleSubmit(e) {

  e.preventDefault();
console.log(this.state.Searchapi+this.state.Moviename)
  fetch(this.state.Searchapi+this.state.Moviename)
  .then( data => data.json())
  .then( data => {
console.log(data)
    this.setState ({movies: data.results});
  })
  
}

  render() {
   // console.log("inside render");
    const movies = {...this.state.movies}
   // console.log({...this.state.movies})
   
    return (

      <>
<header className ="search">
<form  onSubmit={this.handleSubmit}>

<div className ="in">  <input   
type="text"
value ={this.state.Moviename}
onChange ={this.handleChange}
placeholder = "search moviename"
/></div>


</form>
</header>

      <div className ="movie_container">
  { 
    
    this.state.movies.length > 0 && this.state.movies.map(
movies =>{
  return( <Search  key ={movies.id} movies ={movies} />)
  } ) }
</div>

</>
    )
  }
}

