import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { CreateBlogInput } from "@pitifulhawk/medium-commons";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const [post, setPost] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  async function postInput() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, post, {
      headers: {
        Authorization: `Bearer ${token}`, // Ensure the token has 'Bearer' prefix
      },
    });
    console.log(res);
    //@ts-ignore
    navigate(`/blog/${res.data.id}`);
  }

  return (
    <div>
      <Appbar name="User" btText="Publish" />
      <div className="flex justify-center mt-5">
        <div className="w-5/6">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="size-16 text-slate-400 border-r border-slate-400 mr-4 cursor-pointer"
              onClick={postInput}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="w-11/12 flex flex-col">
              <textarea
                className="w-full text-5xl font-semibold outline-none mb-2 placeholder:font-normal resize-none overflow-hidden"
                placeholder="Title"
                rows={1}
                onInput={autoResize}
                onChange={(e) => {
                  setPost((c) => ({
                    ...c,
                    title: e.target.value,
                  }));
                }}
                value={post.title}
              />
              <textarea
                className="w-full text-2xl font-medium outline-none placeholder:font-normal resize-none overflow-hidden"
                placeholder="Content"
                rows={3}
                onInput={autoResize}
                onChange={(e) => {
                  setPost((c) => ({
                    ...c,
                    content: e.target.value,
                  }));
                }}
                value={post.content}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
