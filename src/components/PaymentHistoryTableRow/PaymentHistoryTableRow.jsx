// eslint-disable-next-line no-unused-vars
import React from 'react';

const PaymentHistoryTableRow = ({paymentDetail, index}) => {
    const { purchase, email, transactionId, paid, status, date } = paymentDetail;
    return (
        <tr className='bg-white text-black'>
            <th>{index + 1}</th>
            <th>{purchase}</th>
            <th>{email}</th>
            <td className='font-semibold'>{transactionId}</td>
            <td className='font-semibold'>${paid}</td>
            <td className='font-semibold'>{status}</td>
            <td className='font-semibold'>{date}</td>
        </tr>
    );
};

export default PaymentHistoryTableRow;