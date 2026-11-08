import { Source, SourceContent, SourceTrigger } from "@/components/source"
import type { Link } from "@/data"

/** One hover-card pill, e.g. [Paper] or [Code]. */
export function SourcePill({ link }: { link: Link }) {
  return (
    <Source href={link.href}>
      <SourceTrigger label={link.label} />
      <SourceContent title={link.title} description={link.description} />
    </Source>
  )
}

export function SourceRow({ links }: { links: Link[] }) {
  return (
    <div className="mt-1.5 flex flex-wrap gap-2">
      {links.map((l) => (
        <SourcePill key={l.href} link={l} />
      ))}
    </div>
  )
}
