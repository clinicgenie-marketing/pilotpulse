import { redirect } from "next/navigation";
import { LEGAL_HREF } from "@/lib/pages/legal";

export default function PrivacyRedirect() {
  redirect(LEGAL_HREF);
}
