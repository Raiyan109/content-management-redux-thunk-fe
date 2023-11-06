import { ADD_TO_READING_HISTORY, CREATE_BLOG, LOAD_BLOGS } from "../actionTypes/blogActionTypes"

const initialState = {
    blogs: [],
    readingHistory: [],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            }
        case CREATE_BLOG:
            return {
                ...state,
                blogs: [
                    ...state.blogs,
                    action.payload
                ]
            }
        case ADD_TO_READING_HISTORY:
            return {
                ...state,
                readingHistory: [
                    ...state.readingHistory,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default blogReducer;