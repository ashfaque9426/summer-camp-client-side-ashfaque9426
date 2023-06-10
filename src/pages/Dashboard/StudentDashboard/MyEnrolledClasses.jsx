// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import EnrolledClassesTableRow from '../../../components/EnrolledClassesTableRow/EnrolledClassesTableRow';

const MyEnrolledClasses = () => {
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    useEffect(()=> {
        axiosSecure.get(`/getPaidClasses/${user?.email}`)
        .then(res => setEnrolledClasses(res.data));
    }, [axiosSecure, user])
    return (
        <main role='main'>
            <h2 className='text-3xl font-semibold text-center my-20'>My Enrolled Classes</h2>
            <section className={enrolledClasses.length > 7 ? "h-auto overflow-x-auto mb-20" : "h-[calc(100vh-53vh)] 2xl:h-[calc(100vh-53vh)] mb-20 overflow-x-auto"}>
                {
                    enrolledClasses.length > 0 && <table className="table table-auto bg-white text-black text-center">
                        <thead>
                            <tr className='bg-black text-white'>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Instructor&apos;s Name</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledClasses.map((enrolledClass, index) => <EnrolledClassesTableRow key={enrolledClass._id} index={index} enrolledClass={enrolledClass} />)
                            }
                        </tbody>
                    </table>
                }
            </section>
            
        </main>
    );
};

export default MyEnrolledClasses;