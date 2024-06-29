import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import appwriteService from "../appwrite/config";
import { Button, Container, Loader } from "../components/index";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const userData = useSelector((state) => state.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      setLoading(true);
      appwriteService.getPost(slug).then((post) => {
        setLoading(false);
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    setLoading(true);
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/all-posts");
      }
    });
  };

  return loading ? (
    <Loader />
  ) : post ? (
    <div className="py-8 bg-gray-100 dark:bg-gray-900">
      <Container>
        <div className="relative flex justify-center w-full p-2 mb-4 bg-white border rounded-xl dark:bg-gray-800">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
        </div>
        <div className="text-gray-800 browser-css dark:text-gray-300">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
