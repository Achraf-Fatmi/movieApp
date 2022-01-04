import React from "react";
import Rate from "./MoviesData/Rate";

const Movie =({movie: {posterurl , title , rating , description}})=>{
    return(
    <div className="movie">
        <img src={posterurl} alt="movie"/>
        <div className="movie_info">
            <h3>{title}</h3>
            <Rate rating={rating}/>
        </div>

        <div className="movie-description">
            <h2>Description:</h2>
            <p>{description}</p>
            
        </div>

    </div>
    
    
    )}

export default Movie;