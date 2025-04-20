import { useEffect } from "react";
import { useState } from "react";
import Postcard from "./Postcard";

const Latestpostshome = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('/posts.json')
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error("Error fetching latest posts:", err));
    },[])

    

    return (
        <div className="my-8 px-[5%] flex flex-col items-center justify-center">
            <h2 className="text-2xl">Latest Posts</h2>
            <h3 className="text-xl">Expore the world with Us.</h3>
            {
                posts.map((post)=> (
                     <Postcard key={post.id} post={post}></Postcard>
                ))
            }
        </div>
    );
};

export default Latestpostshome;