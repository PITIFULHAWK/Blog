import { Link } from "react-router-dom";

export const Appbar = ({ name, btText }: { name: string; btText: string }) => {
  return (
    <div className="flex justify-between px-14 py-2">
      <Link to={"/blogs"}>
        <div className="font-semibold text-xl cursor-pointer">Medium</div>
      </Link>
      <div className="flex justify-between ">
        <div className="px-2 flex justify-center flex-col items-center">
          {btText === "Publish" ? (
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center px-2 py-0.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {btText}
            </button>
          ) : (
            <Link to={"/publish"}>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center px-2 py-0.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {btText}
              </button>
            </Link>
          )}
        </div>
        <div className="px-2 flex justify-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <div className="px-2 flex justify-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
        <div className="px-2 flex justify-center flex-col">
          <Avatar name={name} />
        </div>
      </div>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  const [first = "", second = ""] = (name || "").split(" ");
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-xs text-gray-600 dark:text-gray-300">
        {first === "" ? "U" : first.charAt(0).toUpperCase()}
        {second === "" ? null : second.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}
