import React from "react";

function WhatShot({ fill }: Readonly<{ fill: string }>) {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 0.669922C9.5 0.669922 10.24 3.31992 10.24 5.46992C10.24 7.52992 8.89 9.19992 6.83 9.19992C4.76 9.19992 3.2 7.52992 3.2 5.46992L3.23 5.10992C1.21 7.50992 0 10.6199 0 13.9999C0 18.4199 3.58 21.9999 8 21.9999C12.42 21.9999 16 18.4199 16 13.9999C16 8.60992 13.41 3.79992 9.5 0.669922ZM7.71 18.9999C5.93 18.9999 4.49 17.5999 4.49 15.8599C4.49 14.2399 5.54 13.0999 7.3 12.7399C9.07 12.3799 10.9 11.5299 11.92 10.1599C12.31 11.4499 12.51 12.8099 12.51 14.1999C12.51 16.8499 10.36 18.9999 7.71 18.9999Z"
        fill={fill || "#1A1A1A"}
      />
    </svg>
  );
}

export default WhatShot;