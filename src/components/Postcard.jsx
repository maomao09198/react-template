import React from 'react';
import { Link } from 'react-router';

const Postcard = ({post}) => {

    const {category, title, author, date, authorImage, featuredImage} = post;

    return (
      <div>
        <Link to={`/blogs/${title}`} >
          <div className="postcard p-2 shadow-md rounded-md flex flex-col post-border min-h-[450px] relative hover:scale-101 transition-all duration-300 ease-in-out">
            <img src={featuredImage} alt="" className="w-full mb-3" />
            <h2 className="badge bg-[#242535] text-[#4b6bfb] px-6 py-4 text-lg">
              {category}
            </h2>
            <h1 className="text-2xl my-4 font-bold">{title}</h1>
            <div className="my-2 absolute bottom-0 w-full">
              <div className="flex items-center justify-between mx-5">
                <img
                  src={authorImage}
                  alt={author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <h2 className="text-lg font-bold mr-3">{author}</h2>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default Postcard;