// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import PaymentHistoryTableRow from '../../../components/PaymentHistoryTableRow/PaymentHistoryTableRow';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    useEffect(()=>{
        axiosSecure.get(`/sortedPaidClasses/${user?.email}`)
        .then(data => setPaymentHistory(data.data));
    }, [axiosSecure, user])

    return (
        <main role='main'>
            <Helmet>
                <title>Dashboard | Payment History</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-20'>Payment History</h2>
            <section className='text-3xl font-semibold text-center my-20'>
                {
                    paymentHistory.length > 0 && <table className="table table-auto bg-white text-black text-center">
                        <thead>
                            <tr className='bg-black text-white'>
                                <th>#</th>
                                <th>Purchase</th>
                                <th>email</th>
                                <th>Transaction ID</th>
                                <th>Paid</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((paymentDetail, index) => <PaymentHistoryTableRow key={paymentDetail._id} index={index} paymentDetail={paymentDetail} />)
                            }
                        </tbody>
                    </table>
                }
            </section>
        </main>
    );
};

export default PaymentHistory;