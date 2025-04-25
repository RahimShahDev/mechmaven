// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import js-cookie

// Create an Axios instance with the base URL of your backend API
// const axiosInstance = axios.create({
//   baseURL: 'https://story-backend-nu.vercel.app',
// });

// Request interceptor to add the token in the headers
// axiosInstance.interceptors.request.use(
//   (config) => {
    // Retrieve the token from cookies
//     const token = Cookies.get('token'); 
//     if (token) {
//       config.headers['Token'] = `${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;