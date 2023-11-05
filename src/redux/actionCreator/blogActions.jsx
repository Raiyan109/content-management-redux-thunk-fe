import { CREATE_BLOG, LOAD_BLOGS } from "../actionTypes/blogActionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data,
    }
}

export const createBlog = (data) => {
    return {
        type: CREATE_BLOG,
        payload: data,
    }
}