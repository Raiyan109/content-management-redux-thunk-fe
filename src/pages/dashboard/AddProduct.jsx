import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import createBlogData from "../../redux/thunk/blogs/createBlogData";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const blog = {
            title: data.title,
            description: data.description,
            image: data.image,
        }
        console.log(blog);
        dispatch(createBlogData(blog))
    }
    return (
        <div className="p-9">
            <div className="bg-offWhite rounded shadow-lg p-12 mt-12 flex justify-center items-center">
                <form onSubmit={handleSubmit(submit)}>
                    <label className="font-semibold text-xs" htmlFor='title' >Title</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-lightGray mt-2 rounded focus:outline-none focus:ring-2" type="text" id='title' {...register("title")} />
                    <label className="font-semibold text-xs mt-3" htmlFor='description' >Description</label>
                    <textarea className="flex items-center h-12 px-4 w-64 bg-lightGray mt-2 rounded focus:outline-none focus:ring-2" type="text" id='description' {...register("description")} />
                    <label className="font-semibold text-xs" htmlFor='image' >Image</label>
                    <input className="flex items-center h-12 px-4 w-64 bg-lightGray mt-2 rounded focus:outline-none focus:ring-2" type="text" id='image' {...register("image")} />
                    <button className="flex items-center justify-center h-12 px-6 w-64 bg-buttonBg mt-8 rounded font-bold text-md  hover:bg-[#ff6700]" type="submit">Create Blog</button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;