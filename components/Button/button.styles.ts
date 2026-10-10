// button.styles.ts
import { cva, type VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
    [
        "inline-flex items-center justify-center gap-2 rounded-btn border-2 font-semibold",

        "transition-[transform,box-shadow,opacity] duration-150 ease-out motion-reduce:transition-none",

        "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-accent-text",
        // disabled
        "disabled:cursor-not-allowed disabled:opacity-45",
    ],
    {
        variants: {
            variant: {
                default: [
                    "bg-accent text-ink border-line shadow-hard",
                    "enabled:hover:-translate-x-0.5 enabled:hover:-translate-y-0.5 enabled:hover:shadow-hard-md",
                    "enabled:active:translate-x-1 enabled:active:translate-y-1 enabled:active:shadow-none",
                ],
                secondary: [
                    "bg-card text-text border-line shadow-hard",
                    "enabled:hover:-translate-x-0.5 enabled:hover:-translate-y-0.5 enabled:hover:shadow-hard-md",
                    "enabled:active:translate-x-1 enabled:active:translate-y-1 enabled:active:shadow-none",
                ],
                ghost: [
                    "bg-transparent text-text border-transparent underline-offset-4",
                    "enabled:hover:underline enabled:active:opacity-70",
                ],
            },
            size: {
                sm: "h-[38px] px-4 text-sm",
                md: "h-12 px-[22px] text-base",
                lg: "h-[58px] px-[30px] text-[17px]",
            },
        },
        defaultVariants: { variant: "default", size: "md" },
    }
);

export type ButtonVariants = VariantProps<typeof buttonStyles>;