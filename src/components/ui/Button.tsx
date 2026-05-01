import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function buttonVariants(variant: ButtonVariant = "primary") {
  return cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "bg-accent text-[#171008] hover:bg-[#e4bb82] focus-visible:outline-accent",
    variant === "secondary" &&
      "border border-border bg-surface/70 text-foreground hover:border-accent/60 hover:bg-surface focus-visible:outline-accent",
    variant === "ghost" &&
      "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground focus-visible:outline-accent",
  );
}

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonElementProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

export function Button(props: ButtonProps) {
  const { className, variant = "primary", children, ...rest } = props;

  if ("href" in rest && rest.href) {
    return (
      <a className={cn(buttonVariants(variant), className)} {...rest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } =
    rest as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
      href?: never;
    };

  return (
    <button
      className={cn(buttonVariants(variant), className)}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
