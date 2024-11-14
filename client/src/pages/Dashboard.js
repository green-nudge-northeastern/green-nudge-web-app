import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { getCurrentUser } from '@aws-amplify/auth';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Error fetching user', error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Welcome, {user ? user.attributes.name : 'GreenNudge User'}!</h1>
            <p>This is your personalized dashboard. Here you can manage your account, track your progress, and access personalized tools.</p>

            {/* Stats Section */}
            <div className="stats-section">
                <div className="stat-card">
                    <h2>Tasks</h2>
                    <p>5 Pending</p>
                </div>
                <div className="stat-card">
                    <h2>Progress</h2>
                    <p>75% Completed</p>
                </div>
                <div className="stat-card">
                    <h2>Messages</h2>
                    <p>3 Unread</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
