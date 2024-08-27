import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogsCard";
import { BlogsSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <div>
          <Appbar name={"user user"} btText="Create" />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center w-3/5 flex-col">
            {blogs.map(() => (
              <BlogsSkeleton />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Appbar name={"user user"} btText="Create" />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center w-3/5 flex-col">
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name}
              publishDate={"2nd december"}
              title={blog.title}
              content={blog.content}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
