import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Modal  from "react-modal";
import './AddMovie.css'

Modal.setAppElement('#root');
 const AddMovie =({addMovie})=>{
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [title,setTitle]= useState('');
    const [rating,setRating]= useState(0);
    const [posterurl,setPosterurl]= useState('');
    const [description,setDescription]= useState('');

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
      }

      const handleSbubmit = () =>{
          let newMovie ={
              posterurl,
              title,
              rating,
              description
          }
          addMovie(newMovie);
          setIsOpen(false);
          setTitle ('');
          setRating(0)
          setPosterurl('')
          setDescription('')
      }

      return (
        <div>
            <div className="Add-btn">
          <button className="plus-button plus-button--large" onClick={openModal}> <span style={{fontSize: 100 }}>+</span></button>
          </div>
          <Modal 
            className="add-modal"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
              <div className="addmovie-container">
           <h1 className="add-movie-h1">Add A Movie</h1>
            <form>
                <label>Movie Title</label>
                <input type='text' name="title" required 
               value={title}
               onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Movie Rating</label>
                <div className="rating-search"></div>
                <input type="number" name="rating" required min="1" max="5"
                value={rating}
                onChange={(e)=> setRating(e.target.value)}
                />
                <label>Movie Post</label>
                <input type="url" name="post" required
                value={posterurl}
                onChange={(e)=> setPosterurl(e.target.value)}
                />
                <label>Movie Description</label>
                <textarea type="text" name="description" required
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                />
            </form>
            <button onClick={handleSbubmit}>Submit</button>
            <button onClick={closeModal}>Close</button>
            </div>
          </Modal>
        </div>
      );
    
} 

 export default AddMovie;