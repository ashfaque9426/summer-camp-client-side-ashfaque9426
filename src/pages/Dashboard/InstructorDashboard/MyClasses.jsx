// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MyClassesTableRow from '../../../components/MyClassesTableRow/MyClassesTableRow';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: myClasses = []} = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/getInstructorClasses/${user?.email}`)
            return res.data;
        }
    });
    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | My Classes</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>My Classes</h2>
            <section className={myClasses.length > 7 ? "h-auto overflow-x-auto mb-20" : "h-[calc(100vh-53vh)] 2xl:h-[calc(100vh-53vh)] mb-20 overflow-x-auto"}>
                {
                    myClasses.length > 0 && <table className="table table-auto bg-white text-black text-center">
                        <thead>
                            <tr className='bg-black text-white'>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor&apos;s Name</th>
                                <th>Instructor&apos;s Email</th>
                                <th>Status</th>
                                <th>Total Enrolled Students</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myClass, index) => <MyClassesTableRow key={myClass._id} index={index} myClass={myClass} />)
                            }
                        </tbody>
                    </table>
                }
            </section>
        </main>
    );
};

export default MyClasses;