import React from "react";

export default function Container(props: any) {
  return (
    <div
      {...props}
      className={`container mx-auto px-10 md:px-20 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
