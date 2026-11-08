import { NavLink } from "react-router-dom"

import AnimatedGradient from "@/components/animated-gradient"
import { cn } from "@/lib/utils"
import { cvHref, profile } from "@/data"

// Prism's swirl/shape parameters with a light blue palette so the header
// stays readable on a white page. Swap for { preset: "Mist" } etc. to try others.
const headerGradient = {
  preset: "custom",
  color1: "#FAFAFA",
  color2: "#66B3FF",
  color3: "#FAFAFA",
  rotation: -50,
  proportion: 1,
  scale: 0.01,
  speed: 30,
  distortion: 0,
  swirl: 50,
  swirlIterations: 16,
  softness: 47,
  offset: -299,
  shape: "Checks",
  shapeSize: 45,
} as const

const navClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "border-b-2 pb-0.5 text-[15px] transition-opacity hover:opacity-100",
    isActive ? "border-foreground opacity-100" : "border-transparent opacity-70"
  )

export default function Header() {
  return (
    <header className="relative isolate h-[132px] overflow-hidden bg-gradient-to-r from-[#f6f9ff] via-[#bcd9ff] to-[#f6f9ff]">
      <AnimatedGradient config={headerGradient} />

      <div className="relative mx-auto flex h-full max-w-[820px] flex-wrap items-center justify-between gap-5 px-5 pb-4 sm:px-10">
        <div>
          <NavLink
            to="/"
            className="font-serif text-[clamp(20px,3.4vw,26px)] font-medium tracking-tight text-foreground"
          >
            {profile.name}
          </NavLink>
          <div className="text-[13px] text-foreground/70">
            Email:{" "}
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-[22px]">
          <NavLink to="/" end className={navClass}>
            about
          </NavLink>
          <NavLink to="/research" className={navClass}>
            research
          </NavLink>
          <NavLink to="/engineering" className={navClass}>
            engineering
          </NavLink>
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-transparent pb-0.5 text-[15px] opacity-70 transition-opacity hover:opacity-100"
          >
            cv
          </a>
        </nav>
      </div>

      {/* soft fade into the page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-11 bg-gradient-to-b from-transparent to-background" />
    </header>
  )
}
