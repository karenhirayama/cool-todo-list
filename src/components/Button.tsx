import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => (
  <div>Button</div>
);
