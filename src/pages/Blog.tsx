import { useParams } from "react-router-dom";
import { Blogs, useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <BlogSkeleton />;
  }

  return (
    <div className="w-screen">
      <FullBlog blog={blog as Blogs} />
    </div>
  );
};

export default Blog;
