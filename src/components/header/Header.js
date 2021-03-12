import React from 'react';
import './header.css';
import { useHistory } from 'react-router-dom';


function Header(props) {
    const history = useHistory();

    return(
        <div className='header' onClick={() => history.push('/')}>
            {props.title}
        </div>
    )
}

export default Header;