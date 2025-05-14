import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface SectionTitleProps extends ComponentProps<'h2'> {
  orientation?: 'center' | 'start'
}

export function SectionTitle({ orientation, ...props }: SectionTitleProps) {
  const title = tv({
    base: 'font-mono font-extrabold text-5xl tracking-wider text-left uppercase',
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
  return <h2 {...props} className={title({ Text: orientation })} />
}
