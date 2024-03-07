
import BlogReducer from "./features/blog/BlogReducer";

import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer: BlogReducer
})

export default store