import React from 'react'
import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (error) {
      setError(error.message)
      setProcessing(false)
    } else {
      setError(null)
      setSucceeded(true)
      setProcessing(false)
      console.log('Payment successful!', paymentMethod)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg mb-4">Payment Information</h2>
      <CardElement className="p-4 rounded-lg shadow-md" />
      {error && (
        <div className="bg-red-100 py-2 px-3 rounded-lg text-red-600 mb-4">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
        disabled={processing || succeeded}
      >
        {processing ? 'Processing...' : 'Pay'}
      </button>
    </form>
  )
}

export default CheckoutForm
