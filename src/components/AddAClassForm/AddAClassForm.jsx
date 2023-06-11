// eslint-disable-next-line no-unused-vars
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const AddAClassForm = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const price = form.price.value;
        const availableSeats = form.availableSeats.value;

        const addAClassInfos = {
            className,
            classImage,
            instructorName,
            instructorEmail,
            availableSeats: parseInt(availableSeats),
            price: parseFloat(price),
            numberOfStudents: 0,
            status: 'pending'
        }
        console.log(addAClassInfos);

        axiosSecure.post(`/addAClass/${user?.email}`, addAClassInfos)
        .then(data => {
            if(data.data?.message) {
                toast(data.data?.message);
                form.reset();
            }

            if (data.data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Successfully Added',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset();
            }
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="className" id="className" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="className" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="classImage" id="classImage" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="classImage" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ImageUrl</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="instructorName" id="instructorName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user?.displayName} placeholder=" " required readOnly />
                    <label htmlFor="instructorName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="instructorEmail" id="instructorEmail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user?.email} placeholder=" " required readOnly />
                    <label htmlFor="instructorEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Email</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="number" name="availableSeats" id="availableSeats" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="availableSeats" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Seats</label>
                </div>
            </div>
            <input type="submit" className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black" />
        </form>
    );
};

export default AddAClassForm;