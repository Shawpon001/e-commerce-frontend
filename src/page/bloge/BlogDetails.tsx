import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "./Bloge";
import Sidebar from "./BlogSidbar";

export default function BlogDetails() {
  const { id } = useParams();
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

  const blog: Blog | undefined = blogs.find((b) => b.id === Number(id));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">
          Blog not found! Please check the URL.
        </p>
      </div>
    );
  }

  return (
    <div className=" w-full mx-auto px-10 py-8">
      <div className="flex lg:flex-row flex-col justify-between gap-5 items-start">
        <div key={blog.id} className="space-y-6 ">
          <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase">
            Popular Blog
          </span>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="text-gray-500 text-sm">
            Posted by <span className="font-semibold">{blog.author}</span> on{" "}
            {blog.date}
          </p>
          <img
            src={blog.image}
            alt="Blog image"
            className="w-full h-auto rounded-lg shadow"
          />
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              When to say a Prayer or Dua for our brothers and sisters in
              Palestine?
            </h2>
            {blog.content.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
