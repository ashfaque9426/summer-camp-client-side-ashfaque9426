// eslint-disable-next-line no-unused-vars
import React from 'react';

const ClassesPageCard = ({ singleClass }) => {
    const { className, classImage, instructorName, availableSeats, price } = singleClass
    return (
        <section>
            {
                availableSeats === 0 ? <article className="w-full max-w-sm bg-red-500 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <img className="p-5 rounded-t-lg object-cover" src={classImage} alt="summer class image" />
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">{className}</h5>
                            <p className='text-white'>{instructorName}</p>
                            <p className='text-white'>Seats: {availableSeats}</p>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-white dark:text-white">${price}</span>
                            <button disabled={true} className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black">Select Class</button>
                        </div>
                    </div>
                </article> : <article className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <img className="p-5 rounded-t-lg object-cover" src={classImage} alt="summer class image" />
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{className}</h5>
                            <p>{instructorName}</p>
                            <p>Seats: {availableSeats}</p>
                        </a>

                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                            <button disabled={true} className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black">Select Class</button>
                        </div>
                    </div>
                </article>
            }
        </section>

    );
};

export default ClassesPageCard;