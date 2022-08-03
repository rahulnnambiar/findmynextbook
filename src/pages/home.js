import React from 'react';
import Nav from"../components/Navigation";
import Footer from "../components/Footer";
import BookSubject from '../components/BookSubject';
import BookList from '../components/BookList';
import banner from '../../images/bookhome-banner.jpeg'
import Quote from '../components/Quote.js'
import './home.css'
import Addbookreview from './AddBookReview'
import { useState, useEffect} from 'react'

import axios from "axios";


const Home = props =>{  

    const [inputText, setInputText] = useState("");
    useEffect(()=>{
        axios.get("https://wmdd4936-rnaranthatta00.herokuapp.com/api/book")
        .then(results=>{
            setInputText(results.data[0].genre);
            //console.log(results.data[0].genre);                   
        })
        .catch(error=>console.log(error));
    });


    return(
        <>
            <Nav/>
                <div className="home-banner">
                    <img src={banner} alt="book image"></img> 
                    <h2>Find your next book at Findmynextbook.com</h2>
                    <div className='search'>
                        <input type="text" placeholder="Type the title or the author of a book" ></input> 
         
                        
                    </div>
                    
                </div>
                <div className='BookSubject'>
                    <BookSubject/>
                </div>
                <Quote/>
                <Addbookreview/>
                <BookList/>

            <Footer/>
        </>
    )
}
export default Home
