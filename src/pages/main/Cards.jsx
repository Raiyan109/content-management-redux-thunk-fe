import { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";

const Cards = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBlogData())
    }, [])

    const blogs = useSelector((state) => state.blog.blogs)


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto p-8">
            {
                blogs.map((blog) =>
                    <Card key={blog._id} blog={blog} />
                )
            }

        </div>
    );
};

export default Cards;