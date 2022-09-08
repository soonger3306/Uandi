

import { configureStore } from "@reduxjs/toolkit";


import sign from "../module/SignSlice";
import comment from "../module/TravelCommentSlice"
import formReducer from "../module/TravelFormSlice";
import posts from "../module/TravelFormSlice"
import review from "../module/TravelReviewSlice"

const store = configureStore({
  reducer: {sign:sign,comment:comment,cardpost: formReducer,posts:posts,review:review}
});

export default store;