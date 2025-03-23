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
    <div className="w-full md:px-10 px-4 ">
      <div className="relative w-full bg-white ">
        {/* Banner Image */}
        <div className="w-full h-60 sm:h-80 md:h-64 relative">
          <img
            src="https://i.ibb.co.com/QjXHqBQk/IMG-0324.jpg"
            alt="Bookshelf"
            className="rounded-b-lg h-[250px] w-full "
          />
        </div>

        {/* Profile & Title */}
        <div className="flex items-center space-x-4 px-6 mt-[-30px] sm:mt-[-40px]">
          {/* Profile Picture */}
          <div className="w-16 h-16 sm:w-20 z-20 sm:h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co.com/Xrrw66mQ/image-1.png"
              alt="Profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl pt-10 mb-8 sm:text-3xl font-semibold text-gray-800">
          The Book House Blog
        </h1>
      </div>
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
