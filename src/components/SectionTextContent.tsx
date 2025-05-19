import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

interface SectionTextContentProps extends ComponentProps<'p'> {
  orientation?: 'center' | 'start'
}

export function SectionTextContent({
  className,
  orientation,
  ...props
}: SectionTextContentProps) {
  const paragraph = tv({
    base: 'font-sans font-normal text-base leading-6',
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
    <p
      {...props}
      className={twMerge(paragraph({ Text: orientation }), className)}
    />
  )
}
