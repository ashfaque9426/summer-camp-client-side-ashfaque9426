// eslint-disable-next-line no-unused-vars
import React from 'react';

const SelectedClassesTableRow = ({selectedClass, index, handleDelete}) => {
    const {_id, className, instructorName, price, email} = selectedClass;
    return (
        <tr>
            <th className='text-white'>{index + 1}</th>
            <td className='font-semibold'>{className}</td>
            <td className='font-semibold'>{instructorName}</td>
            <td className='font-semibold'>${price}</td>
            <td><button onClick={() => handleDelete(_id, email)} className='btn btn-sm'>Delete</button></td>
            <td><button className='btn btn-sm'>Pay</button></td>
            <td className='block md:hidden'>Scroll Right</td>
        </tr>
    );
};

export default SelectedClassesTableRow;