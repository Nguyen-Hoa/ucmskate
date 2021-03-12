import React from 'react';
import './layout.css';
import Header from './../header/Header';
import Footer from './../footer/Footer';

function Layout(props) {
    return(
        <div className='layout'>

            <div className='header'>
                <Header title='UCM Skate Club'/>
            </div>

            <div className='content'>
                {props.children}
            </div>
            
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;