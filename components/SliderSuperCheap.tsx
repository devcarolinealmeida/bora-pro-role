"use client";

import { motion } from "framer-motion";

export const SliderSuperCheap = ({ ...props }) => {
  return (
    <div className="_slider-super-cheap flex overflow-hidden">
      <motion.div
        className="flex gap-4 flex-none pr-1"
        animate={{
          translateX: "-50%",
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
        <span className="">
          {props.title}
        </span>
      </motion.div>
    </div>
  );
};
