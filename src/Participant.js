import React from 'react';

export default function person (props){
    return (
        <div>
            <div className="avatar">
                <img alt="user" src={props.avatar} />
            </div>
            <ul>
                <li>
                   {props.name} 
                </li>
                <li>
                    <div>
                    {props.onStage} {props.inSession} 
                    </div>
                    
                </li>
            </ul>
        </div>
    );
};

