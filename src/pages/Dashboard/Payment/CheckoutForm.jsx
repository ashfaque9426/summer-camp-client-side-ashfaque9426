// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './CheckoutForm.css';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ selectedClass ,price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [cardError, setCardError] = useState("");

    useEffect(()=> {
        if(price > 0) {
            axiosSecure.post('/create-payment-intent', {price})
            .then(resData => {
                console.log(resData);
                setClientSecret(resData.data.clientSecret);
            })
        }
    }, [axiosSecure, price]);

    const handleSubmit = async e => {
        e.preventDefault();

        if(!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if(card === null) return;

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error) {
            console.log('paymentError: ', error)
        }
        else {
            console.log('payment method', paymentMethod);

        }

        setProcessing(true);

        const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "Anonymous",
                    email: user?.email || 'Anonymous'
                }
            }
        })

        if(confirmError) setCardError(confirmError)

        console.log("paymentIntent", paymentIntent);

        if(paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email, transactionId: paymentIntent.id, price, className: selectedClass.className, classId: selectedClass.classId, instructorEmail: selectedClass.instructorEmail
                , studentEmail: selectedClass.email, status: "paid" }
            axiosSecure.post('/payments', payment)
            .then(res => {
                // console.log(res);
                if(res.statusText === "OK") {
                    Swal.fire(
                        {
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfull',
                            showConfirmButton: false,
                            timer: 1500
                        }
                    )
                }
            })

        }
    }

    return (
        <>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {transactionId && <p className='text-green-600'>Transaction Complete with Transaction Id: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;