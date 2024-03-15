import React from 'react';

const Home: React.FC = () => {
    const matches = ['Match 1', 'Match 2', 'Match 3']; // Replace with actual match data

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/tournaments">Tournaments</a>
                    </li>
                </ul>
            </nav>

            <h1>Available Matches</h1>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>{match}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
