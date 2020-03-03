import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Participants from './Participants';


ReactDOM.render(<Participants key={1} name={'Bill'} onStage={true} inSession={true} avatar={'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1'}/>, document.getElementById('root'));

