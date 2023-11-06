import moment from "moment/moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToReadingHistory } from "../../redux/actionCreator/blogActions";

const Card = ({ blog }) => {
    const dispatch = useDispatch()
    const date = moment(blog?.createdAt).format('MMM Do YY, h:mm a');


    return (
        <article
            onClick={() => dispatch(addToReadingHistory(blog))}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="Office"
                src={blog?.image}
                className="h-56 w-full object-cover"
            />

            <div className="border-buttonBg p-4 sm:p-6 shadow-2xl">
                <time dateTime="2022-10-10" className="block text-xs text-buttonBg">
                    {date}
                </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-semibold">
                        {blog?.title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {blog?.description}
                </p>
            </div>
        </article>
    );
};

export default Card;