import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, PostCard, SkeletonLoader } from "../components/index";
import authService from "../appwrite/auth";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      const postsResponse = await appwriteService.getPosts([]);
      if (postsResponse) {
        setPosts(postsResponse.documents);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 dark:bg-gray-900 dark:text-gray-100">
        <Container>
          <div className="flex flex-wrap">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        </Container>
      </div>
    );
  } else if (!user) {
    return (
      <div className="w-full py-8 text-center dark:bg-gray-900 dark:text-gray-100">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full p-2">
              <h1 className="text-2xl font-bold hover:text-gray-500 dark:hover:text-gray-300">
                <Link to="/login" className="text-blue-500 dark:text-blue-400">
                  You need to login to view all posts. Click here to login.
                </Link>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (posts.length === 0) {
    return (
      <div className="w-full py-8 text-center dark:bg-gray-900 dark:text-gray-100">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full p-2">
              <h1 className="text-2xl font-bold hover:text-gray-500 dark:hover:text-gray-300">
                <Link
                  to="/add-post"
                  className="text-blue-500 dark:text-blue-400"
                >
                  No posts found. Click here to add a new post.
                </Link>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 max-h-fill dark:bg-gray-900 dark:text-gray-100">
        <Container>
          <div className="flex flex-wrap">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : posts.map((post) => (
                  <div
                    key={post.$id}
                    className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <PostCard {...post} />
                  </div>
                ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default AllPost;
