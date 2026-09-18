import {
  ArrowLeftRight,
  FileText,
  Flag,
  MessageCircle,
  UserSearch,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { DigitalWorkerOfferingIcon } from "@/lib/home-content";

export const DIGITAL_WORKER_ICONS: Record<DigitalWorkerOfferingIcon, LucideIcon> = {
  message: MessageCircle,
  quote: FileText,
  candidate: UserSearch,
  workflow: Workflow,
  compare: ArrowLeftRight,
  milestones: Flag,
};
