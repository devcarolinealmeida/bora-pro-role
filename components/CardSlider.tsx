'use client';
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

interface CardProps {
  image: string;
}

const CardSlider: React.FC<CardProps> = ({ image }) => {
  return (
    <motion.div className="relative flex justify-center items-center overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl">
      <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default CardSlider;
