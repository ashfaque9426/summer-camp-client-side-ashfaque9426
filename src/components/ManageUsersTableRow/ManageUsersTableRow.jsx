// eslint-disable-next-line no-unused-vars
import React from 'react';

const ManageUsersTableRow = ({ index, userFromAllUsers }) => {
    const { image, name, email, role } = userFromAllUsers;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th className='flex justify-center'><img className='w-full md:w-1/2 2xl:w-[50%] h-12 2xl:h-16 object-cover' src={image} alt="User Image" /></th>
            <td className='font-semibold'>{name}</td>
            <td className='font-semibold'>{email}</td>
            <td className='font-semibold'>{role}</td>
            <td className='font-semibold'><button disabled={userFromAllUsers?.role !== 'student' ? true : false } className='btn btn-sm'>Make Admin</button></td>
            <td className='font-semibold'><button disabled={userFromAllUsers?.role !== 'student' ? true : false } className='btn btn-sm'>Make Insturctor</button></td>
            
        </tr>
    );
};

export default ManageUsersTableRow;