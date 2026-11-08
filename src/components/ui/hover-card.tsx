import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 6, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      data-slot="hover-card-content"
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "bg-popover text-popover-foreground z-50 w-64 rounded-md border shadow-md outline-hidden",
        className
      )}
      {...props}
    />
  </HoverCardPrimitive.Portal>
))
HoverCardContent.displayName = "HoverCardContent"

export { HoverCard, HoverCardTrigger, HoverCardContent }
