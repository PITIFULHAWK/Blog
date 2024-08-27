import { Appbar } from "./Appbar";

export const BlogsSkeleton = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="py-6 border-b border-slate-400">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <div className="h-5 bg-gray-200 rounded-full w-5"></div>
          </div>
          <div className="px-2 text-sm flex justify-center flex-col">
            <div className="h-3 bg-gray-200 rounded-full w-16"></div>
          </div>
          •{" "}
          <div className="font-normal text-slate-500 text-sm px-2 flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full w-20"></div>
          </div>
        </div>
        <div className="break-words text-lg font-bold py-1">
          <div className="h-4 bg-gray-200 rounded-full w-2/4 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded-full w-2/4 mt-2"></div>
        </div>
        <div className="break-words w-9/12 font-normal font-mono ">
          <div className="h-2 bg-gray-200 rounded-full mt-2"></div>
          <div className="h-2 bg-gray-200 rounded-full mt-2"></div>
          <div className="h-2 bg-gray-200 rounded-full mt-2"></div>
          <div className="font-light text-sm bg-slate-200 text-slate-600 w-28 px-2 flex items-center justify-center rounded-full mt-8">
            <div className="h-4 bg-gray-200 rounded-full w-2/4"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const BlogSkeleton = () => {
  return (
    <div role="status" className=" animate-pulse">
    <div>
      <Appbar name={"U"} btText="Create" />
      <div className="flex justify-center">
        <div className="w-5/6">
          <div className="flex mt-6">
            <div className="flex flex-col w-3/4">
              <div className="break-words font-bold text-7xl pb-3">
              <div className="h-12 bg-gray-200 rounded-full w-3/4 mt-2"></div>
              <div className="h-12 bg-gray-200 rounded-full w-3/4 mt-2"></div>
                {/* {blog.title} */}
              </div>
              <div className="text-lg font-normal text-slate-400 pb-2">
              <div className="h-4 bg-gray-200 rounded-full w-1/4 mt-2"></div>
                {/* Posted on this date */}
              </div>
              <div className="break-words font-normal text-xl">
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-11/12 mt-2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-10/12 mt-2"></div>
                {/* {blog.content} */}
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" font-normal text-lg mb-2">Author</div>
              <div className="flex">
                <div className="flex justify-center items-center px-2">
                <div className="h-5 bg-gray-200 rounded-full w-5"></div>
                  {/* <Avatar name={blog.author.name} /> */}
                </div>
                <div className="flex justify-center items-center px-2">
                <div className="text-3xl font-bold ">
                <div className="h-5 bg-gray-200 rounded-full w-32"></div>
                  {/* {blog.author.name} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
    </div>
  )
}