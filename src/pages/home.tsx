import transition from "@/components/transition";

import { SparklesCore } from "@/components/sparkles";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative -top-14">
        <h1 className="relative  z-20 text-center text-4xl font-bold text-white md:text-7xl lg:text-9xl">
          The Maze
        </h1>
        <div className="relative h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="leaderboard"
              className="mt-4 flex items-center justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "white",
                  color: "black",
                }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center rounded-md bg-black px-4 py-2 font-bold text-white"
              >
                Leaderboard
              </motion.button>
            </Link>
            <Link
              to="domains"
              className="mt-4 flex items-center justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "white",
                  color: "black",
                }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center rounded-md bg-black px-4 py-2 font-bold text-white"
              >
                Get Started
                <div className="ml-2 opacity-0 transition-all duration-200 group-hover:translate-x-2 group-hover:opacity-100">
                  <GoArrowRight />
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const HomePage = transition(Home);

export default HomePage;

// const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
//   // Render a countdown
//   return (
//     <>
//       <div className="flex justify-center">
//         <div className="linear-wipe font-mulish text-xl text-white lg:text-2xl ">
//           <span className="mb-4 mt-2 block text-center text-3xl md:mr-3 md:inline-block md:text-5xl">
//             {days > 0 && `${days} day${days > 1 ? "s" : ""},`}
//           </span>
//           <span>{hours > 0 && `${hours} hour${hours > 1 ? "s" : ""}, `}</span>
//           <span>
//             {minutes > 0 && `${minutes} minute${minutes > 1 ? "s" : ""}, `}
//           </span>
//           <span>{`${seconds} second${seconds > 1 ? "s" : ""}`}</span>
//         </div>
//       </div>
//       <a
//         href="https://docs.google.com/forms/d/e/1FAIpQLSelKJkjyL8Gx5qlA-4ZWwVGiSdR-JQn8Yfbw2sAXZeDfHHv2Q/viewform"
//         target="_blank"
//         className="mt-4 flex items-center justify-center"
//       >
//         <motion.button
//           whileHover={{
//             scale: 1.1,
//           }}
//           whileTap={{ scale: 0.9 }}
//           className="group flex items-center rounded-md bg-white px-4 py-2 font-mulish font-bold text-black"
//         >
//           Register Now
//           <div className="ml-2 transition-all duration-200 group-hover:translate-x-1">
//             <GoArrowRight />
//           </div>
//         </motion.button>
//       </a>
//     </>
//   );
// };
