import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchSingleBlog from "../../redux/thunk/blogs/fetchSingleBlog";

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const { blogId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const url = `http://localhost:5000/api/v1/blogs/${blogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])
    console.log(blog);
    useEffect(() => {
        dispatch(fetchSingleBlog(blogId))
    }, [])

    return (
        <div>
            {/* <!-- component --> */}
            <div className="max-w-screen-lg mx-auto">

                <main key={blog?._id} className="mt-10">
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 lg:px-0">
                            <h2 className="text-4xl font-semibold leading-tight mb-4">
                                {blog?.title}
                            </h2>
                            {/* <a
                                href="#"
                                className="py-2 text-buttonBg inline-flex items-center justify-center mb-2"
                            >
                                Cryptocurrency
                            </a> */}
                        </div>

                        <img src={blog?.image} style={{ height: '28em', width: '100%', objectFit: 'cover' }} />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">

                        <div className="px-4 lg:px-0 mt-12 text-lightGray text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">{blog?.description}</p>

                            {/* 
                            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                                Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
                                expression
                                unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
                                Steepest speaking up attended it as. Made neat an on be gave show snug tore.
                            </div> */}




                        </div>

                        {/* Blogger's Profile */}
                        {/* <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                            <div className="p-4 border-t border-b md:border md:rounded">
                                <div className="flex py-2">
                                    <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                        className="h-10 w-10 rounded-full mr-2 object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                                        <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Mike writes about technology
                                    Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
                                </p>
                                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                    Follow
                                    <i className='bx bx-user-plus ml-2' ></i>
                                </button>
                            </div>
                        </div> */}

                    </div>
                </main>

            </div>
        </div>
    );
};

export default BlogDetails;