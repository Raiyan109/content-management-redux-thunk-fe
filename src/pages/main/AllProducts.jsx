import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { fetchBlogs } from "../../redux/features/blog/BlogReducer";

const AllProducts = () => {
    // const [sortFilter] = useState('oldest')
    const dispatch = useDispatch()

    // eslint-disable-next-line no-unused-vars
    const { blogs, isLoading, isError } = useSelector((state) => state)

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [])

    // const blogs = useSelector((state) => state.blog.blogs)

    // let content;

    // if (sortFilter === 'oldest') {
    //     content = blogs.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    //         .map((blog) =>
    //             <Card key={blog._id} blog={blog} />
    //         )
    // } else if (sortFilter === 'newest') {
    //     content = blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    //         .map((blog) =>
    //             <Card key={blog._id} blog={blog} />
    //         )
    // }
    return (
        <div>
            <h1 className="text-4xl text-center p-9">All Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto p-8">
                {blogs.map((blog) => (
                    <Card key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;