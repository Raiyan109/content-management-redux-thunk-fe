import { ADD_TO_READING_HISTORY, CREATE_BLOG, LOAD_BLOGS, LOAD_SINGLE_BLOG, SHOW_SINGLE_BLOG } from "../actionTypes/blogActionTypes"

const initialState = {
    blogs: [],
    singleBlog: {},
    readingHistory: [],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            }
        case LOAD_SINGLE_BLOG:
            return {
                ...state,
                singleBlog: action.payload,
            }

        case SHOW_SINGLE_BLOG:
            return {
                ...state,
                singleBlog: [
                    ...state.singleBlog,
                    action.payload
                ]
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