import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

interface SectionTitleProps extends ComponentProps<'h2'> {
  orientation?: 'center' | 'start'
}

export function SectionTitle({
  className,
  orientation,
  ...props
}: SectionTitleProps) {
  const title = tv({
    base: 'font-mono font-extrabold text-4xl min-md:text-5xl tracking-wider text-left uppercase',
    variants: {
      Text: {
        center: 'text-center',
        start: 'text-start',
      },
    },
    defaultVariants: {
      Text: 'start',
    },
  })
  return (
    <h2
      {...props}
      className={twMerge(title({ Text: orientation }), className)}
    />
  )
}
