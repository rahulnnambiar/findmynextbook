import React from 'react';
import './booklist.css';
import { useState,useEffect } from 'react';
import axios from "axios";
import demo from '../../images/bookhome-banner1.jpeg'



function BookList(){

   const [booklists,setBooklists] =useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8081/api/book")
        .then(results=>{
            setBooklists(results.data);                    
        })
        .catch(error=>console.log(error));
    });

    return(
        <div className='BookList'>
            <h3>Book List</h3>
        

            {booklists.map((booklist,i)=>{return <div key={i}>

            <div className='books'>
            <img src={demo} alt='book image'></img>
            <div className='sub-books'>
                    <h4>
                        {booklist.title}
                    </h4>
                    <p className='author'>by {booklist.author}</p>
                    <p className='genre'>{booklist.genre}</p>
                    <p className='des'>{booklist.des}</p>
                    <p className='rating'>Rating: {booklist.rating}/5</p>
            
            </div>
            </div>
        </div>
        

            })}
        </div>

    );
}
export default BookList;