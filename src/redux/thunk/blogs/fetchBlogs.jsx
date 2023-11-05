import { loadBlogs } from "../../actionCreator/blogActions"

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/api/v1/blogs')
        const data = await res.json()
        if (data.length) {
            dispatch(loadBlogs(data))
        }
    }
}

export default loadBlogData