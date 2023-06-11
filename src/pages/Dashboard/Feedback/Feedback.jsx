// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Feedback = () => {
    const id = useParams();
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();
    // console.log(id);
    const handleFeedback = e => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;
        const feedbackObj = {feedback: feedback};
        axiosSecure.patch(`/handleFeedback/${user?.email}/${id.id}`, feedbackObj)
        .then(data => {
            if(data.data?.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback Added',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <section onSubmit={handleFeedback} className='h-[calc(100vh-27vh)] flex flex-col justify-center items-center'>
            <form className='flex flex-col justify-center items-center'>
                <div className="mb-6 text-center">
                    <label htmlFor="feedback" className="block my-10 text-2xl font-medium text-gray-900 dark:text-white">Your Feedback</label>
                    <textarea className='bg-white text-black font-semibold border-8' name="feedback" id="feedback" cols="50" rows="10"></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </section>
    );
};

export default Feedback;