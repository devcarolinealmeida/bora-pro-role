import * as React from 'react';
import { twMerge } from "tailwind-merge";

const TagEmoji = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      "inline-flex items-center justify-center gap-2 bg-white border-2 border-black rounded-[10px] py-1 px-2",
      className
    )}
    {...props}
  />
))
TagEmoji.displayName = "TagEmoji"

const Emoji = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={twMerge("inline-flex text-[1.5rem]", className)}
    {...props}
  />
))
Emoji.displayName = "Emoji"

const TagTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={twMerge(
      "text-2xl",
      className
    )}
    {...props}
  />
))
TagTitle.displayName = "TagTitle"



export { TagEmoji, Emoji, TagTitle }



