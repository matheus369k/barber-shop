import type { ComponentProps } from 'react'

interface ContactUsCardRootProps extends ComponentProps<'div'> {}
export function ContactUsCardRoot({ ...props }: ContactUsCardRootProps) {
  return (
    <div
      {...props}
      className='max-w-64 flex flex-col items-center justify-center text-center'
    />
  )
}

interface ContactUsCardContentProps extends ComponentProps<'span'> {}
export function ContactUsCardContent({ ...props }: ContactUsCardContentProps) {
  return <span {...props} className='uppercase font-bold text-[1.125rem]' />
}

interface ContactUsCardTitleProps extends ComponentProps<'h3'> {}
export function ContactUsCardTitle({ ...props }: ContactUsCardTitleProps) {
  return (
    <h3
      {...props}
      className='relative mb-6 font-mono font-extrabold text-2xl uppercase tracking-wider before:absolute before:-bottom-2.5 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-20 before:bg-orange-200'
    />
  )
}
