import React from 'react';
import WorkoutIndex from '../workouts/WorkoutIndex';
import TournamentIndex from '../tournament/tournamentIndex';

const Splash = (props) => {
    return (
        <div>
            <WorkoutIndex token={props.sessionToken} />
            <br />
            <br />
            <br />
            <TournamentIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;