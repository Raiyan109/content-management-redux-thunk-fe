import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="col-span-2 bg-indigo-300 h-[calc(100vh-25px)] p-5 rounded-lg">
            <ul className="flex flex-col gap-3 h-full">
                <li>Admin Dashboard</li>
                <li>
                    <Link to='/dashboard'>Product List</Link>
                </li>
                <li>
                    <Link to='add-product'>Add Product</Link>
                </li>
                <li className="mt-auto">
                    <Link to='/'>Back to home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;