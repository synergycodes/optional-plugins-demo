import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  onClick: () => void;
};

const Button = ({ className, onClick, children }: PropsWithChildren<Props>) => (
  <button
    className={cn(
      "inline-flex gap-1 items-center",
      "text-xs text-white hover:text-[#91b530] duration-300",
      "cursor-pointer tracking-widest",
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
