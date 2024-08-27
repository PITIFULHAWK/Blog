import { SignupInput } from "@pitifulhawk/medium-commons";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInput
      );
      console.log(response.data.jwt);
      const jwt = response.data.jwt; // Ensure token is properly formatted
      console.log(jwt);
      
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data); // Log specific response details
      } else {
        console.error("Unexpected error:", error); // Log non-Axios errors
      }
      alert("Authentication failed. Please check your credentials."); // User-friendly alert
    }
  }

  return (
    <div className="flex h-screen justify-center flex-col pb-10">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="font-bold text-3xl">Create an Account</div>
          <div className="text-md text-slate-400 text-center">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              className="pl-2 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Signup" : "Signin"}
            </Link>
          </div>
          <div className="w-7/12">
            {type === "signin" ? null : (
              <LabelledInput
                label={"Your name"}
                placeholder={"Enter Your Name"}
                onChange={(e) => {
                  setPostInput((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
                //@ts-ignore
                value={postInput.name}
              />
            )}
            <LabelledInput
              label={"Your email"}
              placeholder={"Enter Your Email"}
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
              value={postInput.email}
            />
            <LabelledInput
              label={"Your password"}
              placeholder={"Enter Your Password"}
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
              type={"password"}
              value={postInput.password}
            />
            <button
              onClick={sendRequest}
              type="button"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white mt-4 p-1.5 rounded-md"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string | undefined;
}

const LabelledInput = ({
  label,
  placeholder,
  onChange,
  value,
  type = "text",
}: LabelledInputProps) => {
  return (
    <div className="my-4">
      <div className="text-md">{label}</div>
      <input
        placeholder={placeholder}
        className="p-2 mt-2 border border-solid border-gray-300 w-full rounded-lg outline-none focus:border-blue-400"
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};
