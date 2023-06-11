// eslint-disable-next-line no-unused-vars
import React from 'react';

const EnrolledClassesTableRow = ({ enrolledClass, index }) => {
    const { className, classImage, instructorName, price, payment } = enrolledClass;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th className='flex justify-center'><img className='w-1/2 h-12 object-cover' src={classImage} alt="Class Image" /></th>
            <td className='font-semibold'>{className}</td>
            <td className='font-semibold'>{instructorName}</td>
            <td className='font-semibold'>${price}</td>
            <td className='font-semibold'>{payment}</td>
        </tr>
    );
};

export default EnrolledClassesTableRow;