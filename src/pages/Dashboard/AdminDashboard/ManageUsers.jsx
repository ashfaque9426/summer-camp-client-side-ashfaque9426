// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageUsersTableRow from '../../../components/ManageUsersTableRow/ManageUsersTableRow';

const ManageUsers = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: totalUsers = [], refetch} = useQuery({
        queryKey: ['totalUsers', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/getAllUsersForAdmin/${user?.email}`)
            return res.data;
        }
    })
    return (
        <main role='main'>
            <Helmet>
                <title>Shutter Safari | Manage Classes</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>Manage Users {totalUsers.length}</h2>
            <section className={totalUsers.length > 7 ? "h-auto overflow-x-auto mb-20" : "h-[calc(100vh-53vh)] 2xl:h-[calc(100vh-53vh)] mb-20 overflow-x-auto"}>
                {
                    totalUsers.length > 0 && <table className="table table-auto bg-white text-black text-center">
                        {/* head */}
                        <thead>
                            <tr className='bg-black text-white'>
                                <th>#</th>
                                <th>User Image</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Role</th>
                                <th>Make Admin</th>
                                <th>Make Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                totalUsers.map((userFromAllUsers, index) => <ManageUsersTableRow key={userFromAllUsers._id} index={index} userFromAllUsers={userFromAllUsers} />)
                            }
                        </tbody>
                    </table>
                }
            </section>
        </main>
    );
};

export default ManageUsers;