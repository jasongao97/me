import * as React from "react";

const Slice = ({ style }) => {
  return (
    <span
      className="block bg-gray-600 opacity-100"
      style={{
        height: "2px",
        width: "22px",
        transition:
          "transform 0.25s ease-in-out, opacity 0.2s ease-in-out 0.05s",
        ...style,
      }}
    ></span>
  );
};

const HamburgerButton = ({ active }) => {
  return (
    <div className="p-[9px] -mr-2 relative">
      <Slice
        style={{
          transform: active && "translateY(8px) rotate(45deg) scale(1.2, 1)",
        }}
      />
      <Slice
        style={{
          margin: "6px 0",
          transformOrigin: "left",
          opacity: active && 0,
          transform: active && "scale(0, 1)",
        }}
      />
      <Slice
        style={{
          transform: active && "translateY(-8px) rotate(-45deg) scale(1.2, 1)",
        }}
      />
    </div>
  );
};

export default HamburgerButton;
