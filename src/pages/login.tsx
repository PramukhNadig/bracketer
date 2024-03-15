import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false); // Add loginError state

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Perform login logic here using the username and password values
        // that are stored in the state

        // Send POST request to /login
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle response data
                console.log(data);
                if (data.success) {
                    // Successful login
                    setLoginError(false);
                } else {
                    // Invalid login
                    setLoginError(true);
                }
            })
            .catch(error => {
                // Handle error
                console.error(error);
                setLoginError(true);
            });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', height: '300px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', padding: '20px', textAlign: 'center' }}>
                <Typography variant="h2" style={{ marginBottom: '20px' }}>Login</Typography>
                {loginError && <Typography variant="body1" color="error" style={{ marginBottom: '10px' }}>Invalid login</Typography>}
                <form>
                    <TextField label="Username" value={username} onChange={handleUsernameChange} />
                    <br />
                    <TextField label="Password" type="password" value={password} onChange={handlePasswordChange} />
                    <br />
                    <div style={{ marginTop: '20px' }}>
                        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default LoginPage;
