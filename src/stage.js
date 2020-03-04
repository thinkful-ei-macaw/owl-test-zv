import React from 'react';
import participants from './store';

export default function stage(props){
    const onStagePeople = props.participants.filter(participant =>{
        return participant.onStage === true;
    });
    return (
        <div>
            
        </div>
    );
}