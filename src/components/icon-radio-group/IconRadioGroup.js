import React from 'react';
import './icon-radio-group.css';

function getSelected(onChange) {
    var radios = document.getElementsByName('icon');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            onChange(radios[i].value);
            return radios[i].value;
        }
    }
}

function IconRadio (props) {
    return(
        <label>
            <input type='radio' name='icon' value={props.value} onChange={() => getSelected(props.onChange)}/>
            <img src={props.src} alt='icon-select' style={{height:50}}/>
        </label>
    );
}

export default function IconRadioGroup(props) {
    return (
        <form>
            {props.icons.map((icon, index) => {
                return (
                    <IconRadio src={icon.src} value={icon.value} key={index} onChange={props.onChange}/>
                )
            })}
        </form>
    )
}

