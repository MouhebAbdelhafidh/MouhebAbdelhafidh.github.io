import Publications from "@/components/publications"

export default function Research() {
  return (
    <>
      <h1 className="mb-1.5 mt-2 text-[30px]">Research</h1>
      <p className="mb-6 text-muted-foreground">
        Graph neural networks, federated learning security, and
        retrieval-augmented agents.
      </p>
      <Publications />
    </>
  )
}
