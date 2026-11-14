import { Link } from "react-router-dom"

import { LoadingImage } from "@/components/loading-image"
import { blogPosts } from "@/data"

export default function BlogList() {
  return (
    <ul className="m-0 list-none p-0">
      {blogPosts.map((p, i) => (
        <li
          key={p.slug}
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
            <div className="mt-1.5 flex flex-wrap gap-2">
              <Link
                to={`/blog/${p.slug}`}
                className="inline-flex h-6 items-center rounded-full border bg-muted px-2.5 text-[13px] text-foreground no-underline transition-colors hover:bg-border"
              >
                Learn more
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
