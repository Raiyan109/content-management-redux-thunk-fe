import { createBlog } from "../../actionCreator/blogActions"

const createBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/api/v1/blogs/create', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()

        if (data.acknowledged) {
            dispatch(
                createBlog({
                    _id: data._id,
                    ...blog,
                })
            )
        }
    }
}

export default createBlogData