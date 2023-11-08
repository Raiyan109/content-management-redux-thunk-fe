import { loadSingleBlog } from "../../actionCreator/blogActions"

const fetchSingleBlog = (blogId) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`)
        const data = await res.json()

        if (data.length) {
            dispatch(loadSingleBlog(data))
        }
    }
}

export default fetchSingleBlog