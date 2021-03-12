import React from 'react'
import './user-list.css';

function elapsedMinutes(time) {
    let diff = Date.now() - new Date(time);
    return Math.floor(diff / 60000);
}

function UserList(props) {
    return (
        <div className='user-list'>
            <div className='user-list-row-header'>
                <div className='user-list-row-alias'>Tag</div>
                <div className='user-list-row-time'>Last check-in</div>
            </div>

            {props.list.map((obj, key) => {
                return (
                    <div key={key} className='user-list-row'>
                        <div className='user-list-row-alias'>{obj.alias}</div>
                        <div className='user-list-row-time'>{elapsedMinutes(obj.time)} minutes</div>
                    </div>
                );
            })}
        </div>
    );
}

export default UserList