import Link from 'next/link';
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({ }) => {
    const isLoggedIn = false; // Replace with actual login status
    
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/matches">Matches</Link>
                </li>
                <li>
                    <Link href="/">Homepage</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <Link href="/profile">
                            <img src="profile-icon.png" alt="Profile" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
