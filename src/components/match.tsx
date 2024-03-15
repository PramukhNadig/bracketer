

import React, { useState } from 'react';

const Match = () => {
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your submit logic here
    };

    return (
        <div>
            <h2>Add Match</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ width: '200px', height: '250px', border: '1px solid black' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: team1 ? 'lightblue' : 'white',
                                cursor: 'pointer',
                            }}
                            onClick={() => setTeam1('Team 1')}
                        >
                            {team1 ? 'Team 1' : ''}
                        </div>
                        <div
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: team2 ? 'lightblue' : 'white',
                                cursor: 'pointer',
                            }}
                            onClick={() => setTeam2('Team 2')}
                        >
                            {team2 ? 'Team 2' : ''}
                        </div>
                    </div>
                </div>
                <button type="submit">Add Match</button>
            </form>
        </div>
    );
};
