import Image, { ImageProps } from 'next/image'
import type { ComponentProps } from 'react'

interface ServiceItemRootProps extends ComponentProps<'li'> {}
export function ServiceItemRoot({ ...props }: ServiceItemRootProps) {
  return <li {...props} className='flex items-start gap-11' />
}

interface ServiceItemImageProps extends ImageProps {}
export function ServiceItemImage({ ...props }: ServiceItemImageProps) {
  return <Image {...props} width={64} height={64} />
}

interface ServiceItemTitleProps extends ComponentProps<'h3'> {}
export function ServiceItemTitle({ ...props }: ServiceItemTitleProps) {
  return (
    <h3
      {...props}
      className='font-mono font-extrabold text-2xl uppercase tracking-wider'
    />
  )
}

interface ServiceItemContentProps extends ComponentProps<'div'> {}
export function ServiceItemContent({ ...props }: ServiceItemContentProps) {
  return <div {...props} />
}

interface ServiceItemPriceProps extends ComponentProps<'span'> {}
export function ServiceItemPrice({ ...props }: ServiceItemPriceProps) {
  return (
    <span
      className='font-mono font-extrabold text-2xl uppercase tracking-wider'
      {...props}
    />
  )
}
