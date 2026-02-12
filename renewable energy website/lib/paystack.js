import axios from 'axios';

const paystack = axios.create({
  baseURL: 'https://api.paystack.co',
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const initializePayment = async (data) => {
  try {
    const response = await paystack.post('/transaction/initialize', data);
    return response.data;
  } catch (error) {
    throw new Error('Payment initialization failed');
  }
};

export const verifyPayment = async (reference) => {
  try {
    const response = await paystack.get(`/transaction/verify/${reference}`);
    return response.data;
  } catch (error) {
    throw new Error('Payment verification failed');
  }
};

export default paystack;
