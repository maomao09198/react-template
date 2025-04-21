import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { title } = useParams(); // ✅ get title from URL
  const decodedTitle = decodeURIComponent(title); // ✅ decode if URL contains %20 etc.

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((post) => post.title === decodedTitle);
        setBlog(foundBlog);
      })
      .catch((err) => console.error("Error fetching blog:", err));
  }, [decodedTitle]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={blog.featuredImage}
        alt={blog.title}
        className="mb-4 w-full rounded-md"
      />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <div className="flex items-center mb-6">
        <img
          src={blog.authorImage}
          alt={blog.author}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-lg font-semibold">{blog.author}</h2>
          <p className="text-sm text-gray-500">{blog.date}</p>
        </div>
      </div>
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
};

export default SingleBlog;
