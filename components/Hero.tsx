import React from "react";
import { FlipWords } from "./ui/flipwords";
const Hero = () => {
  const words = ["Memories", "Moments", "Magic", "Magnificence"];
  return (
    <div className="h-screen videoContainer">
      <video autoPlay loop muted className="video">
        <source src="/mainVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content ">
        {/* Your content goes here */}
        <div className="flex justify-between items-center">
          <p>Logo Here</p>
          <div className="flex justify-center items-center">
            {" "}
            <div className="flex gap-32 font-bold">
              <a className="cursor-pointer hover:text-xl transition hover:transition-all ease-in-out w-10">
                About
              </a>
              <a className="cursor-pointer hover:text-xl  w-10 hover:transition-all transition ease-in-out">
                Gallery
              </a>
              <a className="cursor-pointer hover:text-xl  w-10  hover:transition-alltransition ease-in-out">
                Testimonials
              </a>
              <a className="cursor-pointer hover:text-xl  w-48 hover:transition-all transition ease-in-out">
                Connect
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-screen flex justify-end items-center px-4 pb-5">
          <div className="text-3xl mx-auto font-normal md:text-5xl pb-16 text-white dark:text-neutral-400">
            Creating <FlipWords words={words} /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
