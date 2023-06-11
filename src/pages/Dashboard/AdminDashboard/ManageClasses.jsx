// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import AllClassesTableRow from '../../../components/AllClassesTableRow/AllClassesTableRow';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: allClassesForAdmin = [], refetch} = useQuery({
        queryKey: ['allUsersForAdmin', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/getAllClassForAdmin/${user?.email}`)
            return response.data;
        }
    });

    const handleStatus = (id, statusState) => {
        axiosSecure.patch(`/updateStatus/${id}/${user?.email}/${statusState}`)
        .then(data => {
            if(data.data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Status updated to ${statusState}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch();
            }
        })
    }

    return (
        <main role='main'>
            <Helmet>
                <title>Shutter Safari | Manage Users</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>Manage Classes</h2>
            <section className={allClassesForAdmin.length > 7 ? "h-auto overflow-x-auto mb-20" : "h-[calc(100vh-53vh)] 2xl:h-[calc(100vh-53vh)] mb-20 overflow-x-auto"}>
                {
                    allClassesForAdmin.length > 0 && <table className="table table-auto bg-white text-black text-center">
                        {/* head */}
                        <thead>
                            <tr className='bg-black text-white'>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor&apos;s Name</th>
                                <th>Instructor email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Deny</th>
                                <th>Send Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allClassesForAdmin.map((instructorClass, index) => <AllClassesTableRow key={instructorClass._id} index={index} instructorClass={instructorClass} handleStatus={handleStatus} />)
                            }

                        </tbody>
                    </table>
                }
            </section>
        </main>
    );
};

export default ManageClasses;