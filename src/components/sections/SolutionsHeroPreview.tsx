import { WhatsAppBookingMock } from "@/components/pages/SolutionMocks";

export function SolutionsHeroPreview({
  name,
  status,
  initials,
}: {
  name: string;
  status: string;
  initials: string;
}) {
  return <WhatsAppBookingMock name={name} status={status} initials={initials} />;
}
