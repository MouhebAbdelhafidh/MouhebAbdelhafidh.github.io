import { useEffect, useRef, useState } from "react"

import { AnalyzingImage } from "@/components/analyzing-image"
import { cn } from "@/lib/utils"

type LoadingImageProps = Omit<React.ComponentProps<"img">, "className"> & {
  /** sizing / shape of the box (aspect ratio, width, radius, border...) */
  wrapperClassName?: string
  /** extra classes for the <img> itself */
  className?: string
}

/**
 * <img> that shows the "analyzing image" animation while it loads.
 * The grey placeholder only exists during loading, so once the picture
 * is in, no background is left behind it (e.g. transparent corners).
 */
export function LoadingImage({
  wrapperClassName,
  className,
  onLoad,
  onError,
  alt,
  ...props
}: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  // image may already be cached/complete before React attaches onLoad
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true)
  }, [])

  return (
    <div
      className={cn(
        "relative [--loading-ui-analyzing-image-background:var(--muted)]",
        !loaded && "bg-muted",
        wrapperClassName
      )}
    >
      <img
        ref={ref}
        alt={alt}
        {...props}
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
        onError={(e) => {
          setLoaded(true) // stop the animation, show the broken-image alt
          onError?.(e)
        }}
        className={cn(
          "block h-full w-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-muted-foreground">
          <AnalyzingImage className="size-10 max-h-[60%] max-w-[60%]" />
        </div>
      )}
    </div>
  )
}
