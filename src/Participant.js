import React from 'react';
import participants from './store';

export default function person(props) {

    return (
        <div>
            <div className="avatar">
                <img alt="user" src={props.avatar} />
            </div>
            <ul>
                <li>
                    {props.name}
                </li>
                <ul>
                    <div>
                        {props.onStage === true ? <p>On Stage</p> : ""}
                        {props.inSession === true ? <p>In Session</p> : ""}
                    </div>
                </ul>
            </ul>
        </div>
    )
}