import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  publishDate: string;
  title: string;
  content: string;
  id: string;
}
export const BlogCard = ({
  authorName,
  publishDate,
  title,
  content,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="py-6 border-b border-slate-400">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} />
          </div>
          <div className="px-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          •{" "}
          <div className="font-normal text-slate-500 text-sm px-2 flex justify-center flex-col">
            {publishDate}
          </div>
        </div>
        <div className="break-words text-lg font-bold py-1">{title}</div>
        <div className="break-words w-9/12 font-normal font-mono mb-7">
          {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </div>
        <div className="font-light text-sm bg-slate-200 text-slate-600 w-28 px-2 flex items-center justify-center rounded-full">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  const [first = "", second = ""] = (name || "").split(" ");
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-xs text-gray-600 dark:text-gray-300">
        {first === "" ? "U" : first.charAt(0).toUpperCase()}
        {second === "" ? null : second.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}
