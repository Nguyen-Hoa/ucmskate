import UrlTile from 'ol/source/UrlTile';
import React from 'react';
import './hover-icon.css';

export default function HoverIcon(props){
    return (
        <img className='hover-icon' src={props.image} alt='hover2big'/>
        // <div className='hover-icon' style={{backgroundImage: props.image}} onClick={() => props.onClick}>
            
        // </div>
    )
}