"use client";
import StarIcon from "../assets/Icon-star.svg";
import { motion } from "framer-motion";

export const SliderText = ({ ...props }) => {
  return (
    <div className="_slider-text flex overflow-hidden">
      <motion.div
        className="flex gap-4 flex-none pr-1"
        animate={{
          translateX: "-50%",
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <StarIcon className="w-5 h-5 inline-flex justify-center items-center" />
          <span className="">{props.title}</span>
        </div>
      </motion.div>
    </div>
  );
};
