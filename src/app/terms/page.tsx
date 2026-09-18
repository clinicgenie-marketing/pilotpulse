import { redirect } from "next/navigation";
import { LEGAL_HREF } from "@/lib/pages/legal";

export default function TermsRedirect() {
  redirect(LEGAL_HREF);
}
