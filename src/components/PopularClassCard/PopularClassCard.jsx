// eslint-disable-next-line no-unused-vars
import React from 'react';

const PopularClassCard = ({popularClass}) => {
    const { className, instructorName, classImage, numberOfStudents } = popularClass;
    return (
        <article className="card dark:bg-base-100 dark:text-white shadow-xl">
            <figure className='w-full'><img className='object-cover' src={classImage} alt="popular class cover image" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {className}
                </h2>
                <p>Instructor: {instructorName}</p>
                <p>{numberOfStudents} students are in this class.</p>
            </div>
        </article>
    );
};

export default PopularClassCard;