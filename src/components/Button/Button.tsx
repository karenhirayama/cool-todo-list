import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: FC<ButtonProps> = ({ onClick, text }) => (
  <button onClick={onClick}>
    <span>{text}</span>
  </button>
);
