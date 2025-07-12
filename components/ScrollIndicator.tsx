import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  href: string;
  className?: string;
}

const ScrollIndicator = ({ href, className }: ScrollIndicatorProps) => {
  return (
    <div className="bottom-0 absolute inset-x-0 flex justify-center p-8 pointer-events-none">
      <Link
        href={href}
        className="animate-bounce pointer-events-auto"
        aria-label="Scroll to next section"
      >
        <ChevronDown className={`h-12 w-12 ${className}`} />
      </Link>
    </div>
  );
};

export default ScrollIndicator;