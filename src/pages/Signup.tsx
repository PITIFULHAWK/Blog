import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, rotateY: -90, transition: { duration: 0.3 } },
};

const Signup = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="flex flex-col lg:flex-row w-screen">
        <div className="w-ful lg:w-1/2">
          <Auth type="signup" />
        </div>
        <div className="w-ful lg:w-1/2">
          <Quote />
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
