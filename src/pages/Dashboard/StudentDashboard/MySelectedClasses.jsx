// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import SelectedClassesTableRow from '../../../components/SelectedClassesTableRow/SelectedClassesTableRow';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MySelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [reload, setReload] = useState(false);
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = (id, userEmail) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/studentsClass/${id}/${userEmail}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setReload(!reload);
                        }
                    })
            }
        })
        
    }

   useEffect(()=> {
       axiosSecure.get(`/pendingClasses/${user?.email}`)
       .then(data => setSelectedClasses(data.data));
   }, [user, axiosSecure, reload]);

    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | Selected Classes</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>My Sellected Classes {selectedClasses.length}</h2>
            <section className={selectedClasses.length > 7 ? "h-auto overflow-x-auto mb-20" : "h-[calc(100vh-53vh)] 2xl:h-[calc(100vh-53vh)] mb-20 overflow-x-auto"}>
                {
                    selectedClasses.length > 0 && <table className="table table-auto bg-white text-black text-center">
                        {/* head */}
                        <thead>
                            <tr className='bg-black text-white'>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor&apos;s Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClasses.map((selectedClass, index) => <SelectedClassesTableRow key={selectedClass._id} index={index} selectedClass={selectedClass} handleDelete={handleDelete} />)
                            }

                        </tbody>
                    </table>
                }
            </section>
        </main>
    );
};

export default MySelectedClasses;