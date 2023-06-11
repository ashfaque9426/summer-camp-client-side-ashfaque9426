// eslint-disable-next-line no-unused-vars
import React from 'react';

const AllClassesTableRow = ({ index, instructorClass, handleStatus }) => {
    const { _id, classImage, className, instructorName, instructorEmail, availableSeats, price, status } = instructorClass;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th className='flex justify-center'><img className='w-full md:w-1/2 2xl:w-[50%] h-12 2xl:h-16 object-cover' src={classImage} alt="Class Image" /></th>
            <td className='font-semibold'>{className}</td>
            <td className='font-semibold'>{instructorName}</td>
            <td className='font-semibold'>{instructorEmail}</td>
            <td className='font-semibold'>{availableSeats}</td>
            <td className='font-semibold'>{price}</td>
            <td className='font-semibold'>{status}</td>
            <td className='font-semibold'><button onClick={()=> handleStatus(_id, "approved")} disabled={status !== "pending" ? true : false} className='btn btn-sm'>Approve</button></td>
            <td className='font-semibold'><button onClick={()=> handleStatus(_id, "denied")} disabled={status !== "pending" ? true : false} className='btn btn-sm'>Deny</button></td>
            <td className='font-semibold'><button className='btn btn-sm'>Feedback</button></td>
        </tr>
    );
};

export default AllClassesTableRow;