import { Blogs } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogsCard";

export const FullBlog = ({ blog }: { blog: Blogs }) => {
  return (
    <div>
      <Appbar name={blog.author.name} btText="Create" />
      <div className="flex justify-center">
        <div className="w-5/6">
          <div className="flex mt-6">
            <div className="flex flex-col w-3/4">
              <div className="break-words font-bold text-7xl pb-3">
                {blog.title}
              </div>
              <div className="text-lg font-normal text-slate-400 pb-2">
                Posted on this date
              </div>
              <div className="break-words font-normal text-xl">
                {blog.content}
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" font-normal text-lg">Author</div>
              <div className="flex">
                <div className="flex justify-center items-center px-2">
                  <Avatar name={blog.author.name} />
                </div>
                <div className="flex justify-center items-center px-2">
                <div className="text-3xl font-bold ">{blog.author.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
