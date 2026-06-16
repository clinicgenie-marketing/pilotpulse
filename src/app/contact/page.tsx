import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { GradientText } from "@/components/ui/GradientText";
import { footer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a demo or consultation with PilotPulse. We will identify one workflow where AI can realistically reduce workload and improve consistency.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="py-16 lg:py-24">
          <div className="container-edge">
            <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center lg:mb-16">
              <h1 className="heading-2">
                Identify your <GradientText>first AI workflow</GradientText>
              </h1>
              <p className="lead">
                We will identify one area where AI can realistically reduce workload and
                improve consistency. No generic demos. No assumptions. Just what works
                for your business.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
              <ContactForm />

              {/* Details */}
              <div className="flex flex-col gap-6">
                <DetailCard icon={<MapPin className="h-5 w-5" strokeWidth={1.5} />} title={footer.location.heading}>
                  <address className="not-italic">
                    {footer.location.lines.map((line) => (
                      <span key={line} className="block text-sm leading-relaxed text-ink-body">
                        {line}
                      </span>
                    ))}
                  </address>
                </DetailCard>

                <DetailCard icon={<Phone className="h-5 w-5" strokeWidth={1.5} />} title={footer.contact.heading}>
                  <a
                    href={`tel:${footer.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="block text-sm text-ink-body transition-colors hover:text-ink"
                  >
                    {footer.contact.phone}
                  </a>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm text-ink-body transition-colors hover:text-ink"
                  >
                    <Mail className="h-4 w-4 text-brand-blue" strokeWidth={1.5} />
                    {footer.contact.email}
                  </a>
                </DetailCard>

                <DetailCard icon={<Clock className="h-5 w-5" strokeWidth={1.5} />} title={footer.hours.heading}>
                  {footer.hours.lines.map((line) => (
                    <span key={line} className="block text-sm leading-relaxed text-ink-body">
                      {line}
                    </span>
                  ))}
                </DetailCard>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="mb-3 flex items-center gap-2.5 text-sm font-bold text-ink">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-panel-tile text-brand-blue">
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}
