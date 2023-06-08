// eslint-disable-next-line no-unused-vars
import React from 'react';

const InstructorPageCard = ({ instructor }) => {
    const { image, name, email, numberOfClasses, nameOfClasses } = instructor;
    return (
        <article className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 pt-5">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src={image} alt="instructor image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-3"><strong>Classes:</strong> {numberOfClasses}</span>
                <ul className='text-center'>
                    {
                        nameOfClasses.map((singleClass, index) => <li key={index}>{singleClass}</li>)
                    }
                </ul>
            </div>
        </article>
    );
};

export default InstructorPageCard;