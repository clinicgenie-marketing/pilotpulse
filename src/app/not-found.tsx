import Link from "next/link";
import { Building2, Home, Layers, Mail } from "lucide-react";
import { SiteChrome } from "@/components/layout/SiteChrome";

const destinations = [
  {
    href: "/",
    label: "Home",
    description: "Return to our main page.",
    icon: Home,
  },
  {
    href: "/solutions",
    label: "Solutions",
    description: "Explore our AI-driven solutions tailored for your business.",
    icon: Layers,
  },
  {
    href: "/about",
    label: "About Us",
    description: "Learn more about our mission and team.",
    icon: Building2,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Reach out to us for any inquiries or support.",
    icon: Mail,
  },
];

export default function NotFound() {
  return (
    <SiteChrome>
      <section className="grid min-h-[70vh] place-items-center px-5 py-24">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <p className="heading-hero text-primary-soft">404</p>
          <h1 className="heading-2 mt-4">Where Would You Like to Go?</h1>
          <p className="lead mt-4 max-w-[54ch] text-ink-muted">
            Whether you&rsquo;re here to learn more about our services, get in touch with our team, or just browsing
            for something specific, we&rsquo;ve made it easy for you to continue your journey.
          </p>
          <p className="mt-4 text-base font-semibold text-ink">Here are some helpful places to get started:</p>
          <ul className="mt-8 grid w-full gap-4 sm:grid-cols-2">
            {destinations.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link href={item.href} className="dest-card h-full text-left">
                    <span className="grid size-10 place-items-center rounded-lg bg-primary-soft text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-base font-semibold text-ink">{item.label}</span>
                    <span className="text-sm leading-relaxed text-ink-muted">{item.description}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </SiteChrome>
  );
}
