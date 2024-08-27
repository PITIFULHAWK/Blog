import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blogs {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token has 'Bearer' prefix
          },
        });

        setBlogs(res.data);
      } catch (e) {
        console.error("Failed to fetch blogs:", e); // Log any error that occurs
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    };

    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
  };
};

export const useBlog = ({id}:{id:string}) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blogs>();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token has 'Bearer' prefix
          },
        });

        setBlog(res.data);
      } catch (e) {
        console.error("Failed to fetch blogs:", e); // Log any error that occurs
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    };

    fetchBlogs();
  }, [id]); 

  return {
    loading,
    blog,
  };

}