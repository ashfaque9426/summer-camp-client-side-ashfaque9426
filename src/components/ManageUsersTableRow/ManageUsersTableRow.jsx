// eslint-disable-next-line no-unused-vars
import React from 'react';

const ManageUsersTableRow = ({ index, userFromAllUsers, handleRoleUpdate }) => {
    const { _id, image, name, email, role } = userFromAllUsers;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th className='flex justify-center'><img className='w-full md:w-1/2 2xl:w-[50%] h-12 2xl:h-16 object-cover' src={image} alt="User Image" /></th>
            <td className='font-semibold'>{name}</td>
            <td className='font-semibold'>{email}</td>
            <td className='font-semibold'>{role}</td>
            <td className='font-semibold'><button onClick={()=> handleRoleUpdate(_id, 'admin')} disabled={userFromAllUsers?.role === 'admin' ? true : false } className='btn btn-sm'>Make Admin</button></td>
            <td className='font-semibold'><button onClick={()=> handleRoleUpdate(_id, 'instructor')} disabled={userFromAllUsers?.role === 'instructor' ? true : false } className='btn btn-sm'>Make Insturctor</button></td>
        </tr>
    );
};

export default ManageUsersTableRow;