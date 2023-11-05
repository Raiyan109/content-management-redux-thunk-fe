
const Card = ({ blog }) => {
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="Office"
                src={blog?.img}
                className="h-56 w-full object-cover"
            />

            <div className="border-buttonBg p-4 sm:p-6 shadow-2xl">
                <time dateTime="2022-10-10" className="block text-xs text-buttonBg">
                    10th Oct 2022
                </time>

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-semibold">
                        {blog?.title}
                    </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {blog?.desc}
                </p>
            </div>
        </article>
    );
};

export default Card;