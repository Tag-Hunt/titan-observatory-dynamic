import { type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
