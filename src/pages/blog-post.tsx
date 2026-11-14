import { Fragment, type ReactNode } from "react"
import { Link, Navigate, useParams } from "react-router-dom"

import { blogPosts, type BlogBlock } from "@/data"

/** Tiny inline renderer: **bold**, `code` and [text](url). */
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-muted px-1 py-0.5 font-mono text-[0.88em]"
        >
          {part.slice(1, -1)}
        </code>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words text-link hover:underline"
        >
          {link[1]}
        </a>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mb-2 mt-9 text-[22px]">{block.text}</h2>
    case "h3":
      return <h3 className="mb-1.5 mt-6 text-[17px]">{block.text}</h3>
    case "p":
      return <p className="my-3 text-[15.5px]">{renderInline(block.text)}</p>
    case "eq":
      return (
        <div className="my-4 overflow-x-auto rounded-lg border bg-muted px-4 py-3 text-center font-serif text-[15.5px] italic">
          <span className="whitespace-nowrap">{block.text}</span>
        </div>
      )
    case "ol":
    case "ul": {
      const Tag = block.type
      return (
        <Tag
          className={
            "my-3 space-y-1.5 pl-6 text-[15.5px] " +
            (block.type === "ol" ? "list-decimal" : "list-disc")
          }
        >
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </Tag>
      )
    }
    case "table":
      return (
        <div className="my-4 overflow-x-auto rounded-lg border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-3 py-2 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t">
                  {row.map((cell, j) => (
                    <td key={j} className="whitespace-nowrap px-3 py-2">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  return (
    <article>
      <Link
        to="/blog"
        className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to blog
      </Link>
      <h1 className="mb-1.5 mt-3 text-[28px]">{post.title}</h1>
      <p className="m-0 mb-4 text-sm italic text-muted-foreground">{post.topic}</p>
      {post.body.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </article>
  )
}
