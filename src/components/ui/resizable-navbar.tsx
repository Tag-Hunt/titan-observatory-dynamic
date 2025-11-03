"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  condensed?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  activePath?: string;
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  condensed?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const DESKTOP_EXPANDED = {
  maxWidth: "1120px",
  borderRadius: "16px",
  borderColor: "rgba(130,150,255,0)",
  backgroundColor: "rgba(10,16,28,0)",
  backdropFilter: "blur(0px)",
  y: 0,
  boxShadow: "0 0 0 rgba(0,0,0,0)",
};

const DESKTOP_CONDENSED = {
  maxWidth: "860px",
  borderRadius: "999px",
  borderColor: "rgba(130,150,255,0.45)",
  backgroundColor: "rgba(16,24,48,0.9)",
  backdropFilter: "blur(18px)",
  y: 0,
  boxShadow: "0 28px 70px rgba(10,16,32,0.55)",
};

const CONDENSE_NAV_SCROLL_Y = 160;

export const Navbar = ({ children, className }: NavbarProps) => {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCondensed(window.scrollY > CONDENSE_NAV_SCROLL_Y);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const enhancedChildren = React.useMemo(
    () =>
      React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ condensed?: boolean }>, {
              condensed,
            })
          : child,
      ),
    [children, condensed],
  );

  return (
    <div className={cn("sticky top-6 z-40 flex w-full justify-center px-4", className)}>
      <div className="w-full max-w-6xl">{enhancedChildren}</div>
    </div>
  );
};

export const NavBody = ({ children, className, condensed }: NavBodyProps) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-auto hidden items-center gap-6 rounded-2xl border border-transparent px-6 py-3 text-sm text-neutral-300 transition lg:flex",
        condensed
          ? "shadow-[0_18px_42px_-24px_rgba(8,12,24,0.65)]"
          : "shadow-none",
        condensed ? "w-auto" : "w-full",
        "mx-auto",
        className,
      )}
      initial={false}
      animate={condensed ? DESKTOP_CONDENSED : DESKTOP_EXPANDED}
      transition={{ type: "spring", stiffness: 320, damping: 34 }}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, activePath, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative flex flex-1 items-center justify-center gap-2 text-sm font-medium transition",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = activePath === item.link;
        return (
          <Link
            key={item.link}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative rounded-full px-3 py-1.5 text-neutral-200 transition hover:text-white"
          >
            {(hovered === idx || isActive) && (
              <motion.span
                layoutId="navbar-hover"
                className="absolute inset-0 rounded-full bg-[rgba(124,141,255,0.2)]"
                transition={{ type: "spring", stiffness: 360, damping: 32 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, condensed }: MobileNavProps) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-auto relative mx-auto flex w-full flex-col items-center justify-between rounded-2xl border border-transparent bg-transparent px-4 py-3 text-sm text-neutral-200 shadow-none lg:hidden",
        className,
      )}
      initial={false}
      animate={{
        borderColor: condensed ? "rgba(124,141,255,0.45)" : "rgba(124,141,255,0)",
        backgroundColor: condensed ? "rgba(16,24,48,0.95)" : "rgba(16,24,48,0)",
        boxShadow: condensed ? "0 18px 42px -24px rgba(8,12,24,0.65)" : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: condensed ? "blur(16px)" : "blur(0px)",
        y: condensed ? 6 : 0,
      }}
      transition={{ type: "spring", stiffness: 240, damping: 34 }}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full items-center justify-between", className)}>{children}</div>
);

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={cn(
          "absolute left-0 right-0 top-full z-30 mt-3 flex max-h-[calc(100vh-8rem)] flex-col gap-3 overflow-y-auto rounded-2xl border border-white/10 bg-[rgba(16,24,48,0.96)] p-4 shadow-[0_18px_42px_-24px_rgba(8,12,24,0.65)] backdrop-blur-xl",
          className,
        )}
        onClick={onClose}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-100"
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  >
    {isOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
  </button>
);

export const NavbarLogo = () => (
  <Link
    href="/"
    className="relative z-20 flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-neutral-100"
  >
    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[#7d8bff] to-[#a194ff]" />
    Titan Observatory
  </Link>
);

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition";

  const variantStyles = {
    primary: "bg-[#7d8bff] text-neutral-950 hover:bg-[#a194ff]",
    secondary: "border border-[#7d8bff]/60 text-[#7d8bff] hover:bg-[#7d8bff]/10",
    dark: "bg-neutral-900 text-neutral-100 hover:bg-neutral-800",
    gradient: "bg-gradient-to-r from-[#7d8bff] to-[#a194ff] text-neutral-950",
  } as const;

  const TagComponent = Tag as React.ElementType;
  const sharedProps = {
    className: cn(baseStyles, variantStyles[variant], className),
    ...props,
  } as Record<string, unknown>;

  if (href && Tag !== "button") {
    sharedProps.href = href;
  }

  return (
    <TagComponent {...sharedProps}>
      {children}
    </TagComponent>
  );
};
