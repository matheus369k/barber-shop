import Image, { ImageProps } from 'next/image'
import type { ComponentProps } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

interface ChooseUsReviewCardRootProps extends ComponentProps<'div'> {}
export function ChooseUsReviewCardRoot({
  ...props
}: ChooseUsReviewCardRootProps) {
  return <div {...props} className='flex flex-col items-center gap-8 w-36' />
}

interface ChooseUsReviewCardMainContentProps extends ComponentProps<'div'> {}
export function ChooseUsReviewCardMainContent({
  ...props
}: ChooseUsReviewCardMainContentProps) {
  return <div {...props} className='flex flex-col items-center' />
}

interface ChooseUsReviewCardImageProps extends ImageProps {}
export function ChooseUsReviewCardImage({
  ...props
}: ChooseUsReviewCardImageProps) {
  return <Image {...props} width={48} height={48} />
}

interface ChooseUsReviewCardTitleProps extends ComponentProps<'h3'> {}
export function ChooseUsReviewCardTitle({
  ...props
}: ChooseUsReviewCardTitleProps) {
  return (
    <h3
      {...props}
      className='font-mono font-bold text-2xl uppercase tracking-wider text-center'
    />
  )
}

interface ChooseUsReviewCardScoreProps extends ComponentProps<'span'> {}
export function ChooseUsReviewCardScore({
  ...props
}: ChooseUsReviewCardScoreProps) {
  return (
    <span
      {...props}
      className='font-mono font-bold text-8xl uppercase text-center'
    />
  )
}

interface ChooseUsReviewCardStarsProps {
  score: number
}
export function ChooseUsReviewCardStars({
  score,
}: ChooseUsReviewCardStarsProps) {
  return (
    <div className='flex'>
      {Array.from({ length: 5 }).map((_, index) => {
        if (index + 0.5 > score) {
          return (
            <i key={'empty-star-' + index} className='p-2'>
              <FaRegStar className='size-4 text-yellow-400' />
            </i>
          )
        }
        if (Math.round(score) === index + 1 && Math.floor(score) === index) {
          return (
            <i key={'middle-star-' + index} className='p-2'>
              <FaStarHalfAlt className='size-4 text-yellow-400' />
            </i>
          )
        }
        return (
          <i key={'complete-star-' + index} className='p-2'>
            <FaStar className='size-4 text-yellow-400' />
          </i>
        )
      })}
    </div>
  )
}

interface ChooseUsReviewCardReviewsProps extends ComponentProps<'span'> {}
export function ChooseUsReviewCardReviews({
  ...props
}: ChooseUsReviewCardReviewsProps) {
  return <span {...props} className='font-sans text-2xl font-normal' />
}
