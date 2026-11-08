import Publications from "@/components/publications"
import { LoadingImage } from "@/components/loading-image"
import { education, news, paperHref, profile, roles } from "@/data"

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Moheb Abdelhafidh (Mouheb Abdelhafidh) – AI Engineer &amp; Researcher
      </h1>
      <section className="flow-root">
        <figure className="mx-auto mb-4 mt-1.5 w-[150px] sm:float-right sm:mb-3.5 sm:ml-7 sm:mr-0 sm:w-[210px]">
          <LoadingImage
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            wrapperClassName="aspect-square w-full rounded-xl"
          />
          <figcaption className="mt-2 text-center text-[13px] text-muted-foreground">
            {profile.name}
          </figcaption>
        </figure>

        <p>
          Hi! I’m a Data Science &amp; AI Engineer (Dipl.-Ing. / M.Sc. eq.) from
          ESPRIT. Previously, my last role was as a Machine Learning Engineer at{" "}
          <strong className="font-medium">ADDINN Group</strong>, where I
          engineered and shipped to production an AI system for customs fraud
          detection in Cameroon, which led me to produce a{" "}
          <a
            className="text-link hover:underline"
            href={paperHref(
              "GNN_GUCE_Benchmarking.pdf",
              "GNN benchmarking for customs fraud link prediction"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            GNN benchmarking paper for link prediction
          </a>
          .
        </p>
        <p>
          My overarching research vision focuses on constructing robust,
          scalable, and physically-grounded intelligence that bridges complex
          data representations with real-world decision-making. I am mainly
          interested in the following problems:
        </p>
        <ul className="my-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium">Understanding and Developing LLMs:</strong>{" "}
            Investigating Mechanistic Interpretability, execution-grounded
            agentic workflows, and structural alignment to build transparent,
            reliable language models.
          </li>
          <li>
            <strong className="font-medium">Computer Vision &amp; World Models:</strong>{" "}
            Designing multimodal spatio-temporal representations, physical scene
            prediction, and geometric perception.
          </li>
        </ul>
        <p>
          Outside of research and engineering, I enjoy doing bodyweight training
          and continuing my journey in mastering the German language.
        </p>
        <p>
          I’m always open to collaboration, research discussions, or just to chat (
          <a className="text-link hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          )!
        </p>
      </section>

      <h2 className="mb-3.5 mt-11 text-[22px]">News</h2>
      <ul className="m-0 list-none p-0">
        {news.map((n) => (
          <li
            key={n.text}
            className="flex flex-col gap-3.5 pt-1 sm:flex-row sm:items-center sm:gap-5"
          >
            <LoadingImage
              src={n.image}
              alt={n.alt}
              loading="lazy"
              wrapperClassName="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg border sm:w-[170px]"
            />
            <p className="m-0 min-w-0 flex-1">{n.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="mb-3.5 mt-11 text-[22px]">Education</h2>
      <ul className="m-0 list-none p-0">
        {education.map((e, i) => (
          <li
            key={e.what}
            className={
              "grid gap-0.5 py-2.5 sm:grid-cols-[96px_1fr] sm:gap-3.5 " +
              (i === 0 ? "" : "border-t")
            }
          >
            <span className="pt-px text-sm text-muted-foreground">{e.when}</span>
            <span className="flex items-start gap-3.5">
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${e.what} website`}
                className="shrink-0"
              >
                <img
                  src={e.logo}
                  alt={`${e.what} logo`}
                  loading="lazy"
                  className="block h-11 w-11 rounded-md bg-white object-contain p-0.5 transition-opacity hover:opacity-80"
                />
              </a>
              <span className="min-w-0">
                <strong className="font-medium">{e.what}</strong>
                <span className="block text-sm text-muted-foreground">
                  {e.detail} · {e.where}
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mb-3.5 mt-11 text-[22px]">Roles</h2>
      <ul className="m-0 list-none p-0">
        {roles.map((r, i) => (
          <li
            key={r.title}
            className={
              "flex items-start gap-3.5 " + (i === 0 ? "pb-4 pt-1" : "border-t py-4")
            }
          >
            {r.logo && (
              <img
                src={r.logo}
                alt={`${r.meta.split(" · ")[0]} logo`}
                loading="lazy"
                className="mt-0.5 block h-11 w-11 shrink-0 rounded-md bg-white object-contain p-0.5"
              />
            )}
            <div className="min-w-0">
              <p className="m-0 text-[16.5px] font-medium">{r.title}</p>
              <p className="m-0 text-sm italic text-muted-foreground">{r.meta}</p>
              <p className="m-0 mt-1 max-w-[62ch] text-[15px] opacity-85">{r.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mb-3.5 mt-11 text-[22px]">Publications</h2>
      <Publications />
    </>
  )
}
