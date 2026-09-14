import { ImageIcon } from "lucide-react";

export function MediaPlaceholder({
  label = "Image placeholder",
  ratio = "16 / 9",
  fill = false,
  className = "",
}: {
  label?: string;
  ratio?: string;
  fill?: boolean;
  className?: string;
}) {
  return (
    <figure className={`media-ph ${className}`.trim()} aria-label={label}>
      <div className="media-ph-frame" style={fill ? undefined : { aspectRatio: ratio }}>
        <ImageIcon className="media-ph-icon" strokeWidth={1.5} aria-hidden="true" />
        <span>Image</span>
      </div>
    </figure>
  );
}
