const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    is_logged_in: false,
    role: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
