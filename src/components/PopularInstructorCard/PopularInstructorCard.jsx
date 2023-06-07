// eslint-disable-next-line no-unused-vars
import React from 'react';

const PopularInstructorCard = ({ popularInstructor }) => {
    const { instructorName, instructorImage, instructorEmail, nameOfClasses, numberOfStudents } = popularInstructor;
    return (
        <article className="card p-3 dark:bg-base-100 border shadow-xl hover:scale-110">
            <h2 className="card-title pb-5">Instructor: {instructorName}</h2>
            <figure><img src={instructorImage} alt="instructor image" /></figure>
            <div className="card-body px-3">
                <p><strong>Email:</strong> {instructorEmail}</p>
                <section className='mt-2'>
                    <h3 className='font-bold'>Class</h3>
                    <p>{nameOfClasses[0]}</p>
                    <p>Students: {numberOfStudents}</p>
                </section>
            </div>
        </article>
    );
};

export default PopularInstructorCard;