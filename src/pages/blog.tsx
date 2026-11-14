import BlogList from "@/components/blog-list"

export default function Blog() {
  return (
    <>
      <h1 className="mb-1.5 mt-2 text-[30px]">Blog</h1>
      <p className="mb-6 text-muted-foreground">
        Write-ups of research and engineering work.
      </p>
      <BlogList />
    </>
  )
}
