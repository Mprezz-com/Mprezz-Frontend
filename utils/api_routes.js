// export const host = "https://mprezz-backend.onrender.com"
// export const host = "https://mprezz-backend-production.up.railway.app";
export const host = 'http://localhost:8000'
// const host = process.env.BACKEND_API;

export const orderProductRoute = `${host}/payments/create_order/`;
export const orderVerifyRoute = `${host}/payments/verify/payment/`;
export const enrollStudentRoute = `${host}/payments/createEnrollment/`;
export const createLinkedAccount = `${host}/payments/createLinkedAccount/`
