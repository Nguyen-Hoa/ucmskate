import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import { deck, wheel, kingpin, baseplate } from './../../assets/img';
import './spring-test.css';

function SpringTest() {
    return(
        <div className='spring-home'>
            <Spring
                from={{ width: '1%'}}
                to={{ width: '80%'}}
                config={config.molasses}
            >
                {props => <img className='deck' style={props} src={deck} alt='deck'/>}
            </Spring>
            <Spring
                from={{ transform: 'translate3d(0,200%,0)'}}
                to={{ transform: 'translate3d(0,0,0)'}}
                config={config.stiff}
            >
                {props => <img className='baseplate' style={props} src={baseplate} alt='baseplate'/>}
            </Spring>
            <Spring
                from={{ width: '0.05%'}}
                to={{ width: '20%'}}
                config={config.molasses}
            >
                {props => <img className='kingpin' style={props} src={kingpin} alt='kingpin'/>}
            </Spring>
            <Spring
                from={{ transform: 'translate3d(-200%,0,0)'}}
                to={{ transform: 'translate3d(1%,0,0)'}}
                config={config.wobbly}
            >
                {props => <img className='left-wheel' style={props} src={wheel} alt='left-wheel'/>}
            </Spring>
            <Spring
                from={{ transform: 'translate3d(200%,0,0)'}}
                to={{ transform: 'translate3d(-1%,0,0)'}}
                config={config.wobbly}
            >
                {props => <img className='right-wheel' style={props} src={wheel} alt='right-wheel'/>}
            </Spring>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.slow}
            >
                {props =>
                    <div className='link-dump' style={props}>
                        <p><a href='https://www.instagram.com/ucmskate/'>Instagram</a></p>
                        <p><a href='https://catlife.ucmerced.edu/organization/sk8club'>CatLife</a></p>
                        <p>Box</p>
                    </div>
                }
            </Spring>
        </div>
    );
}

export default SpringTest;