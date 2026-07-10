import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/ui/CTAButton";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="grid min-h-[60vh] place-items-center px-5 py-24 pt-32">
        <div className="flex max-w-xl flex-col items-center gap-6 text-center">
          <span className="text-7xl font-extrabold sm:text-8xl">
            <GradientText>404</GradientText>
          </span>
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">
            This page took a different workflow
          </h1>
          <p className="lead max-w-md">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you
            back on track.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/" withArrow>
              Back to home
            </CTAButton>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
