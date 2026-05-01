"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CONTACT_SUBJECT_OPTIONS } from "@/lib/contact-subjects"
import { cn } from "@/lib/utils"

type Props = {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  invalid?: boolean
}

export function ContactSubjectCombobox({ value, onChange, disabled, invalid }: Props) {
  const [open, setOpen] = useState(false)
  const selected = CONTACT_SUBJECT_OPTIONS.find((o) => o.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          className={cn(
            "w-full min-h-12 justify-between rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-normal text-left text-white hover:bg-white/10 hover:text-white",
            !selected && "text-[#EBD9C8]/60",
            invalid && "border-red-400/70 ring-1 ring-red-400/30",
          )}
        >
          <span className="line-clamp-2 pr-2">{selected ? selected.label : "Search or choose a subject…"}</span>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="z-[100] w-[var(--radix-popover-trigger-width)] border border-white/15 bg-[#141414] p-0 text-white shadow-xl"
        align="start"
      >
        <Command className="bg-[#141414] text-white [&_[cmdk-input-wrapper]]:border-white/10 [&_[cmdk-input-wrapper]]:border-b">
          <CommandInput
            placeholder="Type to search services…"
            className="h-11 border-0 bg-transparent text-white placeholder:text-[#657786]"
          />
          <CommandList className="max-h-[280px]">
            <CommandEmpty className="py-6 text-sm text-[#657786]">No subject matches that search.</CommandEmpty>
            <CommandGroup className="p-1">
              {CONTACT_SUBJECT_OPTIONS.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={`${opt.label} ${opt.value}`}
                  onSelect={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                  className="cursor-pointer rounded-lg text-[#EBD9C8] aria-selected:bg-[#FEA02F]/15 aria-selected:text-white data-[selected=true]:bg-[#FEA02F]/20 data-[selected=true]:text-white"
                >
                  <Check className={cn("mr-2 h-4 w-4 shrink-0 text-[#FEA02F]", value === opt.value ? "opacity-100" : "opacity-0")} />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
