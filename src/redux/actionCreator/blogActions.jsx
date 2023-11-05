import { LOAD_BLOGS } from "../actionTypes/blogActionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data,
    }
}