import { ADD_TO_READING_HISTORY, CREATE_BLOG, LOAD_BLOGS, LOAD_SINGLE_BLOG, SHOW_SINGLE_BLOG } from "../actionTypes/blogActionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data,
    }
}

export const loadSingleBlog = (data) => {
    return {
        type: LOAD_SINGLE_BLOG,
        payload: data,
    }
}


export const showSingleBlog = (data) => {
    return {
        type: SHOW_SINGLE_BLOG,
        payload: data,
    }
}

export const createBlog = (data) => {
    return {
        type: CREATE_BLOG,
        payload: data,
    }
}

export const addToReadingHistory = (data) => {
    return {
        type: ADD_TO_READING_HISTORY,
        payload: data,
    }
}

