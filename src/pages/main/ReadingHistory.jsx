import { useSelector } from "react-redux";
import Card from "./Card";

const ReadingHistory = () => {
    const readingHistory = useSelector((state) => state.blog.readingHistory)
    console.log(readingHistory);
    return (
        <div>
            <h1 className="text-4xl text-center p-9">Reading History</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto p-8">
                {
                    readingHistory.map((item) => (
                        <Card key={item._id} blog={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default ReadingHistory;