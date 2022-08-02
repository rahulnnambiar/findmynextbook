import React from 'react';
import './booksubject.css';

function BookSubject(){
    return(
        <div className='BookSubject'>
            <h3>Genre</h3>
            <div className='SubjectName'>
                <button>History</button>
                <button>Adventure</button>
                <button>Fiction</button>
                <button>Time Travel</button>
                <button>Romance</button>
                <button>Love Stories</button>
                <button>Thriller & Suspense</button>
                <button>Fatansy Fiction</button>
            </div>
        </div>
    );
}
export default BookSubject;