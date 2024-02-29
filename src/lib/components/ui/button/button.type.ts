import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from ".";
import type { ComponentPropsWithoutRef } from "react";

export interface Props extends ComponentPropsWithoutRef<"button">, VariantProps<typeof buttonVariants> {}