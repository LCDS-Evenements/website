import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from ".";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}