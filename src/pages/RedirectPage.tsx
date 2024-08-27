import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToSignup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signup");
  }, [navigate]);

  return null; // or you can return a loading spinner if you want
};

export default RedirectToSignup;
