// export const host = "https://mprezz-backend.onrender.com"
// export const host = "http://mprezz-backend-production.up.railway.app";
// export const host = 'http://localhost:8000'
const host = process.env.REACT_APP_BACKEND_API;

export const orderProductRoute = `${host}/payments/create_order/`;
export const orderVerifyRoute = `${host}/payments/verify/payment/`;
export const enrollStudentRoute = `${host}/payments/createEnrollment/`;
