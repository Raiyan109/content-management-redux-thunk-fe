import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
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