import React from 'react';
import participants from './store';
import Participant from './Participant';

export default function List(props) {
  return (
    <section>
      <div>

        {participants.sort((a,b)=>a.inSession ? -1 : 1).map((participant) =>

          <Participant
            key={participant.id}
            name={participant.name}
            onStage={participant.onStage}
            inSession={participant.inSession}
            avatar={participant.avatar}
          />
        )}

      </div>
    </section>
  )
}
