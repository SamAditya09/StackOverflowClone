import "./RightSidebar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RightSidebar = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <aside className="right-sidebar">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </aside>
  );
};

export default RightSidebar;
