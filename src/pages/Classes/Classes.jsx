// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClassesPageCard from '../../components/ClassesPageCard/ClassesPageCard';
import useStudent from '../../hooks/useStudent';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Classes = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [isStudent] = useStudent();
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [axiosSecure] = useAxiosSecure();
    const handleSelection = (id, prefferedClass) => {
        axiosSecure.post(`/studentsClass/${id}`, prefferedClass)
        .then(data => {
            if (data.data.message) toast(data.data.message);
            if (data.data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Succesfully Added to the database',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    useEffect(()=> {
        if (!user) toast('Please login first to select classes');
        if(isAdmin) toast('You are an admin so you cant select classes');
        if (isInstructor) toast("Instructors can't select classes");
        axios('http://localhost:5000/allClasses')
        .then(data => setAllClasses(data.data));
    }, [user, isAdmin, isInstructor]);

    return (
        <section className='md:w-[90%] 2xl:w-[70%] mx-auto my-20'>
            <h2 className='text-3xl font-bold mt-10 mb-7 text-center'>Our Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-12'>
                {
                    allClasses.map(singleClass => <ClassesPageCard key={singleClass._id} singleClass={singleClass} isStudent={isStudent} handleSelection={handleSelection} />)
                }
            </div>
        </section>
    );
};

export default Classes;