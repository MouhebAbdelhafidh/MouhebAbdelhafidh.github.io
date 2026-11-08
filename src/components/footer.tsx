import { profile } from "@/data"

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[820px] border-t px-5 pb-10 pt-5 text-[13.5px] text-muted-foreground sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>© 2026 {profile.name}</span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-link">
            GitHub: MouhebAbdelhafidh
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-link">
            LinkedIn
          </a>
          <span>{profile.location}</span>
        </span>
      </div>
    </footer>
  )
}
