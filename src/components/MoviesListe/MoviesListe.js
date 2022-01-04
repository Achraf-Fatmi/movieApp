import React from "react";

import Movies from '../Movies'


const MoviesListe = ({moviesList,searchByTitle, searchByRate})=>{
    return (
        <div className="movies-list">
{moviesList
.filter(el => el.title.toLowerCase().includes(searchByTitle.toLowerCase().trim()) && el.rating >= searchByRate)
.map((movie, i)=>(
    <Movies key={i} movie={movie}/>
))}

        </div>
    )
}

export default MoviesListe;