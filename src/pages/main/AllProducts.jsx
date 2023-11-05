import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";
import Card from "./Card";

const AllProducts = () => {
    const [sortFilter] = useState('oldest')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBlogData())
    }, [])

    const blogs = useSelector((state) => state.blog.blogs)

    let sortedContent;

    if (sortFilter === 'oldest') {
        sortedContent = blogs.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            .map((blog) =>
                <Card key={blog._id} blog={blog} />
            )
    } else if (sortFilter === 'newest') {
        sortedContent = blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((blog) =>
                <Card key={blog._id} blog={blog} />
            )
    }
    return (
        <div>
            <h1 className="text-4xl text-center p-9">All Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto p-8">
                {sortedContent}
            </div>
        </div>
    );
};

export default AllProducts;