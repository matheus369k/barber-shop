import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  bgStyle?: 'primary' | 'secondary'
}

export function Button({ bgStyle, className, ...props }: ButtonProps) {
  const button = tv({
    base: 'py-5 px-8 uppercase font-mono font-extrabold tracking-wider text-[1.125rem] cursor-pointer transition-colors duration-300',
    variants: {
      color: {
        primary:
          'bg-transparent text-white ring-2 ring-white hover:bg-orange-200 hover:text-black',
        secondary:
          'bg-orange-200 text-black ring-2 ring-orange-200  hover:bg-transparent hover:text-white',
      },
    },
    defaultVariants: {
      color: 'secondary',
    },
  })
  return (
    <button
      {...props}
      className={twMerge(button({ color: bgStyle }), className)}
    />
  )
}
