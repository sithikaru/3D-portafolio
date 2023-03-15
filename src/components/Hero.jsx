import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-3 inset-0`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#FF4057]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#FF4057]">Zijja</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            I am a skilled Web and Mobile Application Developer with expertise
            in both Front End and Back End development.<br className="sm:block hidden"/> Let me help bring your
            digital vision to life with seamless user experiences and robust
            functionality. Contact me today to learn more about my services.
          </p>
        </div>
      </div>

        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">

            </div>
          </a>
        </div>
    </section>
  );
};

export default Hero;
