'use client';
import { motion, animate, useMotionValue } from "framer-motion";
import CardSlider from "./CardSlider";
import useMeasure from 'react-use-measure';
import { useEffect } from "react";

export default function Slider() {
  const images = [
    "/bora_pro_role-joao-e-cami.jpg",
    "/bora_pro_role-joao-e-cami-2.jpg",
    "/bora_pro_role-joao-e-cami-3.jpg",
    "/bora_pro_role-joao-e-cami-4.jpg",
    "/bora_pro_role-joao-e-cami-5.jpg",
  ];

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: 25,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

   return (
    <div className="relative top-16 py-6 overflow-x-clip">
        <motion.div style={{x: xTranslation}} className="absolute left-0 flex gap-4" ref={ref}>
           {[...images, ...images].map((item, idx) => (
            <CardSlider image={item} key={idx}/>
           ))}
        </motion.div>
    </div>
   )
}


