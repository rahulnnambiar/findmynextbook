import React from 'react';
import './navigation.css';
import { slide as Menu } from 'react-burger-menu';


function Navigation(){
    return(
        <div className='Navigation'>
            <h3>Find my Next book</h3>
            <Menu>
                <a className="menu-item" href="/">
                    Home
                </a>
            </Menu>
        </div>
    );
}
export default Navigation;