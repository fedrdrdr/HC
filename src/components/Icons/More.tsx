import React from "react";
import { SVGProps } from "react";

type MoreProps = SVGProps<SVGSVGElement> & {
  isOpen: boolean;
}

export const More = ({isOpen, ...props}: MoreProps) => (

  <svg width="6" height="10" viewBox="0 0 6 10"
    fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 9L5 5L1 1"
      // stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" />
      stroke={isOpen? "#0F0F0F" : "#94368D"}  strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



