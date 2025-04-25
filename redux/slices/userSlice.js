// redux/slices/userSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null, // Will store all user data
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload; // Set all user data
//       state.loading = false;
//       state.error = null;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//     clearUser: (state) => {
//       state.user = null; // Clear user data
//     },
//   },
// });

// export const { setUser, setLoading, setError, clearUser } = userSlice.actions;
// export default userSlice.reducer;