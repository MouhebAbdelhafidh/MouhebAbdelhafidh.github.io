import { Source, SourceContent, SourceTrigger } from "@/components/source"
import { SourcePill } from "@/components/source-row"
import { projects, techStack } from "@/data"

export default function Engineering() {
  return (
    <>
      <h1 className="mb-1.5 mt-2 text-[30px]">Engineering</h1>
      <p className="mb-6 text-muted-foreground">Technical stack &amp; projects</p>

      <h2 className="mb-1 mt-9 text-[22px]">Technical stack</h2>
      <p className="m-0 mb-4 text-sm text-muted-foreground">
        Hover a tag for details; click to open the reference.
      </p>
      <ul className="m-0 list-none p-0">
        {techStack.map((cat, i) => (
          <li
            key={cat.label}
            className={
              "grid gap-1.5 py-3 sm:grid-cols-[150px_1fr] sm:gap-4 " +
              (i === 0 ? "" : "border-t")
            }
          >
            <span className="pt-0.5 text-sm font-medium">{cat.label}</span>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((t) => (
                <Source key={t.name} href={t.href}>
                  <SourceTrigger
                    label={t.name}
                    showFavicon
                    className="h-6 max-w-none text-[13px]"
                  />
                  <SourceContent title={t.name} description={t.description} />
                </Source>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mb-3.5 mt-11 text-[22px]">Projects</h2>
      <ul className="m-0 list-none p-0">
        {projects.map((p, i) => (
          <li key={p.title} className={i === 0 ? "pb-4 pt-1" : "border-t py-4"}>
            <p className="m-0 flex items-center gap-1.5 text-[16.5px] font-medium">
              {p.title}
              {p.featured && (
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Featured project"
                  className="size-4 shrink-0 fill-amber-400 text-amber-500"
                >
                  <title>Featured project</title>
                  <path
                    d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </p>
            <p className="m-0 text-sm italic text-muted-foreground">{p.stack}</p>
            <p className="m-0 mt-1 max-w-[62ch] text-[15px] opacity-85">{p.desc}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <SourcePill
                link={{
                  label: p.label ?? "Code",
                  href: p.code,
                  title: p.title,
                  description: p.desc,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
