"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

const About = () => {
  const images = ["/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg"];
  return (
    <section className="">
      <div className="w-full flex justify-start">
        <div className="w-[70%] px-4 pt-10 text-xl">
          <p className="mb-24  text-black font-bold text-6xl">ABOUT</p>
          Welcome to
          <span> DRONEWALA </span>, where we specialize in capturing the
          timeless beauty of your most cherished moments. With a passion for
          storytelling through images, we dedicate ourselves to preserving the
          unique essence of your love story. Our approach is a blend of artistic
          vision and technical expertise, ensuring that each photograph reflects
          the joy, emotion, and intimacy of your special day. From the quiet,
          candid glances to the grand, celebratory scenes, we are committed to
          creating a visual narrative that you will treasure forever. Let us be
          a part of your journey, turning fleeting moments into lasting
          memories.
        </div>
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          ></motion.div>
        </ImagesSlider>
      </div>
    </section>
  );
};

export default About;
