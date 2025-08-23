// components/commons/Button.tsx
import React from "react";
import type { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
    >
      {title}
    </button>
  );
};

export default Button;
