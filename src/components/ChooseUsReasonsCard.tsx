import Image, { ImageProps } from 'next/image'
import type { ComponentProps } from 'react'

interface ChooseUsReasonsCardRootProps extends ComponentProps<'li'> {}
export function ChooseUsReasonsCardRoot({
  ...props
}: ChooseUsReasonsCardRootProps) {
  return (
    <li {...props} className='max-w-2xs flex flex-col items-center gap-8' />
  )
}

interface ChooseUsReasonsCardHeaderContentProps extends ComponentProps<'div'> {}
export function ChooseUsReasonsCardHeaderContent({
  ...props
}: ChooseUsReasonsCardHeaderContentProps) {
  return <div {...props} className='flex flex-col items-center gap-1.5' />
}

interface ChooseUsReasonsCardImageProps extends ImageProps {}
export function ChooseUsReasonsCardImage({
  ...props
}: ChooseUsReasonsCardImageProps) {
  return <Image width={64} height={64} {...props} />
}

interface ChooseUsReasonsCardTitleProps extends ComponentProps<'h3'> {}
export function ChooseUsReasonsCardTitle({
  ...props
}: ChooseUsReasonsCardTitleProps) {
  return (
    <h3
      {...props}
      className='relative font-mono font-extrabold text-2xl uppercase tracking-wider before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-20 before:bg-orange-200'
    />
  )
}
