import { type VariantProps } from "class-variance-authority";
import type { buttonLinkVariants } from ".";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonLinkVariants> {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}