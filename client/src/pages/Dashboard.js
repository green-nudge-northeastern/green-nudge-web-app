import React from 'react';
import './Dashboard.css';
import { auth } from '../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="dashboard-container">
            <h1>Welcome, {user.displayName || 'GreenNudge User'}!</h1>
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
