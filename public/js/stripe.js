/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_C5CV4vIyiohnxaCblQSThXmT00uOyWvAUL');

export const bookTour = async tourId => {
  try {
    // 1) get the session from the server
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    // 2) create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch {
    console.log(err);
    showAlert('error', err);
  }
};
