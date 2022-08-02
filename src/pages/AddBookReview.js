import React from 'react';
import './addbookreview.css'

const AddBookReview = props =>{  
    return(
        <div className='addbook'>
            <h2>Add New Book to listing</h2>

            <div className='addlisting_form'>
                <form action="/api/book" encType='mutlipart/form-data' method='post' > 
                    <label>
                        Book Title
                        <input type="text" id="title" name="title" placeholder="" ></input>
                    </label>
                    <label>
                        Author
                        <input type="text" id="author" name="author" placeholder=""></input>
                    </label>
                    <label>
                        Genre
                        <input type="text" id="genre" name="genre" placeholder=""></input>
                    </label>
                    <label>
                        Description
                        <textarea type="text" id="des" name="des" placeholder=""></textarea>
                    </label>
                    <label>
                        Rating
                        <input type="number" id="rating" name="rating" placeholder=""></input>
                    </label>
                    
            

                    <input type="submit" value="Submit"/>

                </form>
        
            </div>
    </div>
        
        
    )
}

export default AddBookReview