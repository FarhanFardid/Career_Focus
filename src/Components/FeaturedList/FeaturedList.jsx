import React from 'react';

const FeaturedList = ({jobinfo}) => {
    const {companyName,jobTitle,jobType,job_place,location,salaryRange} =jobinfo;

    return (
        <div>
            <h2>Name: {companyName}</h2>
        </div>
    );
};

export default FeaturedList;