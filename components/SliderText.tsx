"use client";
import StarIcon from "../assets/Icon-star.svg";
import { motion } from "framer-motion";

export const SliderText = () => {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-4 flex-none pr-1"
        animate={{
          translateX: "-50%",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="w-4 h-4 inline-flex justify-center items-center" />
          <p className="font-asap-condens-700">Subscribe to our channel</p>
        </div>
      </motion.div>
    </div>
  );
};
