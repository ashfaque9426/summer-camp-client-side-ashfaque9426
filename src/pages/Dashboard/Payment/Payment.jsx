// eslint-disable-next-line no-unused-vars
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const selectedClass = useLoaderData();
    const price = parseFloat(selectedClass.price.toFixed(2));
    return (
        <main className='h-[calc(100vh-53vh)] 2xl:h-[calc(100vh-38.5vh)] mb-20' role='main'>
            <Helmet>
                <title>Shutter Safari | Payment</title>
            </Helmet>
            <h2 className='text-3xl font-bold mt-10 mb-7 text-center'>Payment Section</h2>
            <section className='flex flex-col justify-center items-center my-9'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm selectedClass={selectedClass} price={price} />
                </Elements>
            </section>
        </main>
    );
};

export default Payment;