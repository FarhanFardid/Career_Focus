import React from 'react';
import Header from '../Header/Header';
import JobList from '../JobList/JobList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <JobList></JobList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;