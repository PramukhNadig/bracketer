import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';

const SignupPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState(false); // Add signupError state

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignup = () => {
        // Perform signup logic here using the username and password values
        // that are stored in the state

        // Send POST request to /signup
        fetch('/api/createLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    // Successful signup
                    setSignupError(false);
                } else {
                    // Invalid signup
                    setSignupError(true);
                }
            })
            .catch(error => {
                // Handle error
                console.error(error);
                setSignupError(true);
            });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', height: '300px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', padding: '20px', textAlign: 'center' }}>
                <Typography variant="h2" style={{ marginBottom: '20px' }}>Signup</Typography>
                {signupError && <Typography variant="body1" color="error" style={{ marginBottom: '10px' }}>Invalid signup</Typography>}
                <form>
                    <TextField label="Username" value={username} onChange={handleUsernameChange} />
                    <br />
                    <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} />
                    <br />
                    <div style={{ marginTop: '20px' }}>
                        <Button variant="contained" color="primary" onClick={handleSignup}>Signup</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default SignupPage;
