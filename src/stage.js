import React from "react";
import participants from "./store";
import './Stage.css';
export default function Stage(props) {
  const onStagePeople = participants
    .filter(participant => {
      return participant.onStage === true;
    })
    .map(participant => (
      <div key={participant.id}>
        {participant.name}
        <img alt="user icon" src={participant.avatar} />
      </div>
    ));
  return (
    <div className ="Stage">
      <div>{onStagePeople}</div>
    </div>
  );
}
