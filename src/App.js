import React from 'react';
import Home from './pages/home';
import AddBooks from './pages/AddBookReview';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

    return (<>
           <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<AddBooks/>} />
                    
                </Routes>
            </Router>
        </>
    );
}

export default App;