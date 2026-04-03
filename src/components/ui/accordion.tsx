"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-white/10", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium",
        "bg-white/0 hover:bg-white/5 transition-colors",
        "data-[state=open]:bg-white/5 data-[state=open]:ring-1 data-[state=open]:ring-inset data-[state=open]:ring-cyan-400/30",
        "focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-cyan-400/30",
        className,
      )}
      {...props}
    >
      <span className="min-w-0 truncate">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 text-zinc-300 transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-cyan-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden px-4 pb-4 pt-0",
      // Smooth open/close using Radix's measured content height variable.
      "data-[state=open]:animate-[accordion-down_200ms_ease-out_forwards]",
      "data-[state=closed]:animate-[accordion-up_200ms_ease-out_forwards]",
      className,
    )}
    {...props}
  >
    <div className="text-sm text-zinc-300">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

