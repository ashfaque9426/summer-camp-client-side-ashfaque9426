// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const SelectedClassesTableRow = ({selectedClass, index, handleDelete}) => {
    const {_id, className, classImage, instructorName, price, email} = selectedClass;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th className='flex justify-center'><img className='w-full md:w-1/2 2xl:w-[30%] h-12 2xl:h-16 object-cover' src={classImage} alt="Class Image" /></th>
            <td className='font-semibold'>{className}</td>
            <td className='font-semibold'>{instructorName}</td>
            <td className='font-semibold'>${price}</td>
            <td><button onClick={() => handleDelete(_id, email)} className='btn btn-sm'>Delete</button></td>
            <td><Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm'>Pay</button></Link></td>
        </tr>
    );
};

export default SelectedClassesTableRow;