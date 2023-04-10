import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h2>This is Navbar</h2>
            <div>
                <p>CareerFocus</p>
            
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;