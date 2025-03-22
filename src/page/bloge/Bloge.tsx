import { useEffect, useState } from "react";

export type Blog = {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string[];
  image: string;
};

const Bloge = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full md:px-10 px-4 md:pt-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="max-w-full lg:h-[520px] h-[550px] border border-gray-600 rounded overflow-hidden shadow-lg"
          >
            <img
              className="p-2 w-full h-[320px] object-cover"
              src={blog.image}
              alt={blog.title}
            />
            <div className="px-6  py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              <div className="flex items-center mt-2">
                <p className="text-gray-700 text-base">{blog.date}</p>
                <p className="text-gray-700 text-base">By {blog.author}</p>
              </div>
            </div>
            <div className="px-6 pt-4 ">
              <button className="bg-[#009689] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href={`/bloge/blogdetails/${blog.id}`}> Continue Reading</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloge;
