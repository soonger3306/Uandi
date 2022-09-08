import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState = {
  sign: [],
  success: false,
  error:null,

};

export const getSign = createAsyncThunk(
  "getSign",
  (payload, thunkAPI) => {}
);




export const SignSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {},
  extraReducers : {}
});

export const {} = SignSlice.actions;
export default SignSlice.reducer;