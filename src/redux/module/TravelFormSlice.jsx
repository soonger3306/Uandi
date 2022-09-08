import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

// db에 데이터를 넣음
export const __addTravelCard = createAsyncThunk(
    "music/ADD_TRAVELCARD",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post(
                "http://localhost:3001/posts",
                payload
            );
            console.log(data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// 서버에서 데이터 get 요청.
export const getTravelList = createAsyncThunk(
    "travel/getTravelList ",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/posts");
            console.log(data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/** db내 데이터 삭제 **/
export const __deleteTravelCard = createAsyncThunk(
    "travel/DELETE_TRAVELCARD",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.delete(
                `http://localhost:3001/posts/${payload}`
            );
            return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const __updateTravelCard= createAsyncThunk(
    "travel/UPDATE_MUSIC",
  async (payload, thunkAPI) => {
      try {
          const data = await axios.put(
              `http://localhost:3001/posts/${payload.id}`,
              payload
          );
          return thunkAPI.fulfillWithValue(data.data);
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
  }  );


const cardpost = createSlice({
    name: "cardpost",
    initialState,
    reducers: {},
    extraReducers: {
        // addTravelCard Thunk
        [__addTravelCard.pending]: (state) => {
            state.isLoading = true;
        },
        [__addTravelCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts.push(action.payload);
            console.log(action);
        },

        [__addTravelCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        // getTravelList Thunk
        [getTravelList.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [getTravelList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            console.log(state);
        },
        [getTravelList.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },

        // deleteTravelCard Thunk
        [__deleteTravelCard.pending]: (state) => {
            state.isLoading = true;
        },
        [__deleteTravelCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = state.posts.filter(
                (card) => card.id !== action.payload
            );
        },
        [__deleteTravelCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__updateTravelCard]: (state) => {
            state.isLoading = true;
          },
          [__updateTravelCard]: (state, action) => {
            state.isLoading = false;
            state.posts = state.posts.map((posts) =>
            posts.id === action.payload.id ? { ...action.payload } :posts
            );
          },
          [__updateTravelCard]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          },
    },
});
export default cardpost.reducer;
