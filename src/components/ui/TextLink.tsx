import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

/** Micron-style text link with trailing arrow. */
export function TextLink({ href, children, className = "", external = false }: TextLinkProps) {
  const classes = `text-link group ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  if (external || /^https?:\/\//.test(href)) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
