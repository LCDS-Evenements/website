import { type VariantProps } from "class-variance-authority";
import type { buttonLinkVariants } from ".";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonLinkVariants> {
  text: string;
  href: string;
}