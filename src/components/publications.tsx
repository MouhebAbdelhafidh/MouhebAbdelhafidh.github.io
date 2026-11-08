import { LoadingImage } from "@/components/loading-image"
import { SourceRow } from "@/components/source-row"
import { publications } from "@/data"

export default function Publications() {
  return (
    <ul className="m-0 list-none p-0">
      {publications.map((p, i) => (
        <li
          key={p.title}
          className={
            "flex flex-col gap-3.5 sm:flex-row sm:items-start sm:gap-5 " +
            (i === 0 ? "pb-4 pt-1" : "border-t py-4")
          }
        >
          {p.image && (
            <LoadingImage
              src={p.image}
              alt={`Figure from: ${p.title}`}
              loading="lazy"
              wrapperClassName="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg border sm:w-[170px]"
            />
          )}
          <div className="min-w-0 flex-1">
            <p className="m-0 text-[16.5px] font-medium">{p.title}</p>
            <p className="m-0 text-sm italic text-muted-foreground">{p.topic}</p>
            <SourceRow links={p.links} />
          </div>
        </li>
      ))}
    </ul>
  )
}
