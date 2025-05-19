import Image from 'next/image'
import bgHeader from '@/assets/bg-header.jpg'
import { MdPhoneInTalk } from 'react-icons/md'
import { TbClockHour5Filled } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'
import { Button } from './Button'
import {
  ContactUsCardContent,
  ContactUsCardRoot,
  ContactUsCardTitle,
} from './ContactUsCard'
import { ShowingViewWrapper } from '@/utils/motion'

export function Header() {
  return (
    <header className='relative min-lg:min-h-dvh bg-transparent max-h-fit'>
      <div className='w-full max-h-[48.8125rem] h-full aspect-video absolute top-0 left-0 -z-10'>
        <Image
          height={781}
          width={1462}
          src={bgHeader}
          loading='lazy'
          fetchPriority='high'
          className='object-cover w-full h-full'
          alt='Homem sentado em uma barbearia, recebendo um corte de cabelo com máquina, enquanto usa o celular. O ambiente tem iluminação quente e estilo moderno.'
        />
      </div>

      <ShowingViewWrapper className=' flex flex-col justify-end h-full gap-10 min-md:gap-20 pt-36 min-md:pt-64 min-lg:pt-80'>
        <div className='text-white max-w-5xl flex flex-col m-auto gap-10 p-4'>
          <div className='z-50 flex flex-col justify-center gap-4'>
            <h1 className='font-mono font-black text-5xl min-md:text-7xl text-center uppercase'>
              The ultimate convenience xor busy people
            </h1>
            <span className='font-sans font-medium text-2xl text-center'>
              Experience the Convenience of In-Home Barber Services
            </span>
          </div>

          <div className='z-50 flex flex-wrap items-center justify-center gap-6 min-md:gap-12'>
            <a className='w-full min-md:w-fit' href='#appointment'>
              <Button type='button' className='w-full'>
                Book an Appointment
              </Button>
            </a>
            <a className='w-full min-md:w-fit' href='#services'>
              <Button bgStyle='primary' type='button' className='w-full'>
                browse services
              </Button>
            </a>
          </div>
        </div>

        <div className='max-w-7xl overflow-x-scroll px-4 min-lg:px-16 py-9 shadow-2xl bg-white text-black w-full m-auto hidden-scroll'>
          <div className='min-w-max w-full flex justify-between gap-4 '>
            <ContactUsCardRoot>
              <FaLocationDot className='size-16 mx-auto' />
              <ContactUsCardTitle>Address</ContactUsCardTitle>
              <ContactUsCardContent>
                3696 Lynden Road, <br /> Lefroy Ontario canada
              </ContactUsCardContent>
            </ContactUsCardRoot>
            <ContactUsCardRoot>
              <MdPhoneInTalk className='size-16 mx-auto' />
              <ContactUsCardTitle>phone</ContactUsCardTitle>
              <ContactUsCardContent>
                +62(123)-456-7890 <br /> +62(123)-456-7890
              </ContactUsCardContent>
            </ContactUsCardRoot>
            <ContactUsCardRoot>
              <TbClockHour5Filled className='size-16 mx-auto' />
              <ContactUsCardTitle>hours</ContactUsCardTitle>
              <ContactUsCardContent>
                Mon – Sat: 9AM – 8PM <br /> Sun: 9AM – 6PM
              </ContactUsCardContent>
            </ContactUsCardRoot>
          </div>
        </div>
      </ShowingViewWrapper>
    </header>
  )
}
