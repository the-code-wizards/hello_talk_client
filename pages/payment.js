import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from  ''
const stripePromise = loadStripe("pk_test_xxxxxxxxxxxxxxxxxxxxxxxx");

const Payment =() =>{
  return(
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  )
}

export default Payment;