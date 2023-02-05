import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';
import useSingleUser from '../hooks/useSingleUser';

const CheckOut = ({ id, ammount }) => {
    const [user, error] = useAuthState(auth);
    const [singleUser] = useSingleUser()
    const [cardError, setCarderror] = useState("")
    const [success, setSuccess] = useState("")
    const [processing, setProcessing] = useState(false)
    const [transectionId, setTransectonId] = useState("")

    const stripe = useStripe();
    const elements = useElements();


    const order = {
        price: ammount,
        email: user.email,
        name: user.displayName,
        _id: id
    }

    const { price, name, _id, ind } = order;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://hello-talk-webserver.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // authorization: `bearer ${localStorage.getItem("s-token")}`,
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        // const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;

        // console.log(email, phone, address)
        // 
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCarderror(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCarderror("")
        }
        setSuccess("")
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );

        if (confirmError) {
            setCarderror(confirmError.message);

            return;
        }
        console.log(paymentIntent)
        if (paymentIntent.status === "succeeded") {
            console.log("card-info", card)
            // store data
            const payment = {
                price,
                transectionId: paymentIntent.id,
                email: singleUser?.email,
                productId: _id,
                phone,
                address
            }
            fetch("https://hello-talk-webserver.vercel.app/payments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    // authorization: `bearer ${localStorage.getItem("s-token")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Congratulation! Your payment completed")
                        setTransectonId(paymentIntent.id)
                        swal("payment successful", "success")
                        form.reset()
                    }
                })
            window.location.href = `/course/enrolled/${_id}`;

        }
        console.log("paymentIntent", paymentIntent)
        setProcessing(false)
    }

    return (
        <div className='p-16 border border-inherit bg-[#BFDBFE] rounded-lg'>
            <form onSubmit={handleSubmit} className="mt-[-40px]">
                <h2 className='text-2xl text-center'>Pay with card</h2>
                {/* <label className="label ">
                    <span className="label-text">Your Email:</span>
                </label>
                <div className="form-control h-[3rem]">
                    <input name="email" type="text" placeholder="Your Email" className="input input-bordered input-info h-[3rem]" required />
                </div> */}
                <label className="label ">
                    <span className="label-text">Your Phone Number:</span>
                </label>
                <div className="form-control h-[3rem] ">
                    <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-info h-[3rem]" required />
                </div>
                <label className="label ">
                    <span className="label-text">Your Address :</span>
                </label>
                <div className="form-control h-[3rem] ">
                    <input name="address" type="text" placeholder="Your Address" className="input input-bordered input-info h-[3rem]" required />
                </div>
                <label className="label ">
                    <span className="label-text">Your Card Info:</span>
                </label>
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
                <button className='btn btn-sm btn-error mt-6 w-[450px] text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success &&
                <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transectionId: <span className='font-bold'> {transectionId}</span></p>
                </div>
            }
        </div>
    )
}

export default CheckOut;