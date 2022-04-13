import React from "react";
import { SVGProps } from "react";

export interface MoreProps {
  color: string;
}

export const More = (props: SVGProps<SVGSVGElement>) => (

  <svg width="6" height="10" viewBox="0 0 6 10"
    fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 9L5 5L1 1"
      stroke="#94368D" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



