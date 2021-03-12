import React, { useEffect, useState } from 'react';
import './skater-map.css';
import { getSkaters } from './../API/skater-map-api';
import Button from './../button/Button';
import CheckinForm from './../check-in-form/CheckinForm';
import SquareMap from './../square-map/SquareMap';
import UserList from './../user-list/UserList';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import { bobcat_cute, bobcat_head } from './../../assets/img';
import { useSpring, animated } from 'react-spring/web.cjs';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

// UCMERCED: { center: [-120.42516, 37.36353], zoom: 16 }
const icons = [
    {src: bobcat_cute, value: 'bobcat-cute.png'},
    {src: bobcat_head, value: 'bobcat-head.png'}
];

const SkaterMap = () => {
    const [skaters, setSkaters] = useState([]);
    const [features, setFeatures] = useState([]);
    const [formopen, setFormOpen] = useState(false);

    const openForm = () => { setFormOpen(true); };
    const closeForm = () => { setFormOpen(false); };

    useEffect(() => {
        getSkaters()
            .then(res => {
                console.log(res);

                const list = res ? res.filter(skater => new Date(skater.expire * 1000) > Date.now()) : [];
                setSkaters(list);
            
                const temp = [];
                list.forEach((skater) => {
                    const icon = createMapFeature(skater);
                    temp.push(icon);
                })

                setFeatures(temp);
            })
    }, []);

    return (
        <div className='skater-map'>

            <SquareMap center={[-120.42516, 37.36353]} zoom={16} features={features}/>

            <Button style={{'width': '25%', 'display': 'flex', 'marginLeft': 'auto', 'marginRight': 'auto'}} label='Check In' onClick={openForm}/>

            <UserList list={skaters}/>

            <Modal
                className='modal'
                open={formopen}
                onClose={closeForm}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={formopen}>
                    <div className='modal-child'>
                        <CheckinForm icons={icons}/>
                    </div>
                </Fade>
                
            </Modal>
        </div>
    );
}

// Open Layers
function getStyle(style){
    if (style === 'bobcat-cute.png'){
        return {src: bobcat_cute, scale: 0.06};
    }
    else if (style === 'bobcat-head.png'){
        return {src: bobcat_head, scale: 0.025};
    }
    else {
        return {src: bobcat_cute, scale: 0.05};
    }
}

function createMapFeature(skater){
 
    var icon = new Feature({
        geometry: new Point(
            fromLonLat(
                [parseFloat(skater.lon), parseFloat(skater.lat)]
            )),
    });

    const {src, scale} = getStyle(skater.icon);
    icon.setStyle(

        new Style({
            image: new Icon({
                src: src,
                scale: scale
            })
        })
    )
    return icon;
}

// React Spring + Material UI Modal
const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter){
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited){
                onExited();
            }
        },
    })

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

export default SkaterMap;