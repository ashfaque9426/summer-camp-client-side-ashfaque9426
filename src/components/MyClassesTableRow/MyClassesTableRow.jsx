// eslint-disable-next-line no-unused-vars
import React from 'react';

const MyClassesTableRow = ({ myClass, index}) => {
    const {classImage, className, instructorName, instructorEmail, numberOfStudents, status} = myClass;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th className='flex justify-center'><img className='w-1/2 h-12 object-cover' src={classImage} alt="Class Image" /></th>
            <td className='font-semibold'>{className}</td>
            <td className='font-semibold'>{instructorName}</td>
            <td className='font-semibold'>{instructorEmail}</td>
            <td className='font-semibold'>{status}</td>
            <td className='font-semibold'>{numberOfStudents}</td>
            <td className='font-semibold'>{myClass?.feeback? myClass.feeback : "No Feedback"}</td>
            <td className='font-semibold'><button className='btn btn-sm'>Update</button></td>
        </tr>
    );
};

export default MyClassesTableRow;