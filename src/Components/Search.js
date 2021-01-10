import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
          IMAGE_API : "https://image.tmdb.org/t/p/w500" 
       }
      // console.log(this.props.movies)
   }
   
   
    render() {

        const { title, poster_path, vote_average, overview} = this.props.movies;
        const IMAGE_API = this.state;

       // console.log(this.state.IMAGE_API + poster_path)
        return (
            <div className ="movie">
                <img src={this.state.IMAGE_API + poster_path}   alt ={title} />
                <div className="movie-info">

                <h3>{title}</h3>
                 
                <span>{vote_average}</span>
                </div>
                
                <div   className ="movie-overview">
                <h3>Synopsis</h3>
                <p> {overview}</p>
                </div>
            </div>
        )
    }
}

