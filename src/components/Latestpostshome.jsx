import { useEffect } from "react";
import { useState } from "react";
import Postcard from "./Postcard";
import { Link } from "react-router";

const Latestpostshome = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('/posts.json')
        .then((res) => res.json())
        .then((data) => {
          const shuffledPosts = data.sort(() => Math.random() - 0.5);
          const latestPosts = shuffledPosts.slice(0, 12); // Get the first 4 posts  
          setPosts(latestPosts);
        })
        .catch((err) => console.error("Error fetching latest posts:", err));
    },[])

    

    return (
      <div className="my-8 px-[5%] flex flex-col items-center justify-center">
        <h2 className="text-2xl">Latest Posts</h2>
        <h3 className="text-xl">Expore the world with Us.</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {posts.map((post) => (
            <Postcard key={post.id} post={post}></Postcard>
          ))}
        </div>
        <Link to='/blogs' className="btn mt-8">See More</Link>
      </div>
    );
};

export default Latestpostshome;