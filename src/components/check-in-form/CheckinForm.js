import React, {useState} from 'react';
import './check-in-form.css';
import Button from './../button/Button';
import IconRadioGroup from './../icon-radio-group/IconRadioGroup';
import { addSkater } from './../API/skater-map-api';
import { club_coin, icon_names } from './../../assets/img';
import ReCAPTCHA from "react-google-recaptcha";

var minutes = [5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const captchaKey = process.env.REACT_APP_env === 'dev'
    ? process.env.REACT_APP_devCaptchaKey
    : process.env.REACT_APP_prodCaptchaKey;
    
function CheckinForm(props) {
    const [alias, setAlias] = useState('');
    const [icon, setIcon] = useState(icon_names[0]);
    const [expire, setExpire] = useState(5);
    const [loading, setLoading] = useState(false);
    const [not_captchad, setCaptchad] = useState(true);

    const handleIconSelect = (e) => {
        setIcon(e);
    }

    function onCaptcha(value){
        setCaptchad(false);
    }

    function refreshPage(){
        window.location.reload();
    }

    function verifySkater(skater){
        if (!skater) return false;
        
        if (skater.alias === "") return false;
        
        if (!isFinite(skater.lat)) return false;
        if (!isFinite(skater.lon)) return false;

        if (!icon_names.includes(skater.icon)) return false;

        return true;
    }

    function checkIn(position) {
        let expiry = new Date(position.timestamp + expire*60000);

        let skater = {
            alias: alias,
            lon: position.coords.longitude, 
            lat: position.coords.latitude,
            time: position.timestamp,
            icon: icon,
            expire: position.timestamp + expire*60000
        }

        if (verifySkater(skater)) {
            // console.log('adding skater...', skater);

            addSkater(skater).then(() => {
                setLoading(false);
                refreshPage();
            })
            .catch(() => {
                setLoading(false);
                alert('Failed to add skater');
            })

        }
        else {
            setLoading(false);
            alert('Check form!')
        }
    }

    function geoLoc(){
        function success(position){
            checkIn(position);
        }

        function error(error){
            console.log(`ERROR(${error.code}): ${error.message}`);
            setLoading(false);
        }
        
        const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
    
        if (!navigator.geolocation) {
            console.log('Your device does not support geolocation');
        }
        else {
            console.log('Determining location...');
            setLoading(true);
            navigator.geolocation.getCurrentPosition(success, error, options);
         }
    }

    return(
        <div className='check-in-form'>
            <div className='check-in-form-row'>
                <span>Tag: </span>
                <input 
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                />
            </div>

            <div className='check-in-form-row'>
                <IconRadioGroup icons={props.icons ? props.icons : []} onChange={handleIconSelect}/>
            </div>

            <div className='check-in-form-row'>
                <span>I will be skating for </span>
                <select value={expire} onChange={e => setExpire(e.target.value)}>
                    {minutes.map((option, key) => {
                        return <option key={key} value={option}>{option}</option>
                    })}
                </select>
                <span> minutes</span>
            </div>
            
            <div className='check-in-form-row'>
                <ReCAPTCHA
                    sitekey={captchaKey}
                    onChange={onCaptcha}
                />
            </div>

            <div className='check-in-form-row'>
                <Button disabled={not_captchad} label='I am skating!' onClick={() => geoLoc()}/>
                {loading ? <img src={club_coin} alt='icon-select' style={{height:30}}/> : ''}
            </div>

        </div>
    );
}

export default CheckinForm;