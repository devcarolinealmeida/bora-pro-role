import * as React from 'react';
import { twMerge } from "tailwind-merge";

import CamiSvg from "@/assets/camila.svg";

const CardQuemSomos = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      "w-full md:max-w-[475px] bg-[#F5F2E8] flex justify-between gap-6 rounded-[10px] p-6 overflow-clip",
      className
    )}
    {...props}
  />
))
CardQuemSomos.displayName = "CardQuemSomos"

const CardTopTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge("inline-block uppercase mb-2", className)}
    {...props}
  />
))
CardTopTitle.displayName = "CardTopTitle"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={twMerge(
      "text-2xl leading-none tracking-tight mb-6",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={twMerge("mb-6", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge("pl-6", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardLi = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={twMerge("font-asap-condens-700", className)} {...props} />
))
CardLi.displayName = "CardLi"

const CardImg = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge("", className)}
    {...props}
  />
))
CardImg.displayName = "CardImg"

export { CardQuemSomos, CardTopTitle, CardTitle, CardDescription, CardContent, CardLi, CardImg }



