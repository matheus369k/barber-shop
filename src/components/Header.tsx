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

export function Header() {
  return (
    <header className='relative min-h-dvh bg-transparent max-h-fit'>
      <div className='w-full max-h-[48.8125rem] h-full aspect-video absolute top-0 left-0 -z-10'>
        <Image
          height={781}
          width={1462}
          src={bgHeader}
          className='object-cover w-full h-full'
          alt='Homem sentado em uma barbearia, recebendo um corte de cabelo com máquina, enquanto usa o celular. O ambiente tem iluminação quente e estilo moderno.'
        />
      </div>

      <div className=' flex flex-col justify-end h-full gap-20 pt-80'>
        <div className='text-white max-w-5xl flex flex-col m-auto gap-10'>
          <div className='z-50 flex flex-col justify-center gap-4'>
            <h1 className='font-mono font-black text-7xl text-center uppercase'>
              The ultimate convenience xor busy people
            </h1>
            <span className='font-sans font-medium text-2xl text-center'>
              Experience the Convenience of In-Home Barber Services
            </span>
          </div>

          <div className='z-50 flex items-center justify-center gap-12'>
            <a href='#appointment'>
              <Button type='button'>Book an Appointment</Button>
            </a>
            <a href='#services'>
              <Button bgStyle='primary' type='button'>
                browse services
              </Button>
            </a>
          </div>
        </div>

        <div className='bg-white text-black w-full max-w-7xl m-auto flex gap-4 justify-between px-16 py-9 shadow-2xl'>
          <ContactUsCardRoot>
            <FaLocationDot className='size-16' />
            <ContactUsCardTitle>Address</ContactUsCardTitle>
            <ContactUsCardContent>
              3696 Lynden Road, <br /> Lefroy Ontario canada
            </ContactUsCardContent>
          </ContactUsCardRoot>
          <ContactUsCardRoot>
            <MdPhoneInTalk className='size-16' />
            <ContactUsCardTitle>phone</ContactUsCardTitle>
            <ContactUsCardContent>
              +62(123)-456-7890 <br /> +62(123)-456-7890
            </ContactUsCardContent>
          </ContactUsCardRoot>
          <ContactUsCardRoot className='max-w-64 flex flex-col items-center justify-center text-center'>
            <TbClockHour5Filled className='size-16' />
            <ContactUsCardTitle>hours</ContactUsCardTitle>
            <ContactUsCardContent>
              Mon – Sat: 9AM – 8PM <br /> Sun: 9AM – 6PM
            </ContactUsCardContent>
          </ContactUsCardRoot>
        </div>
      </div>
    </header>
  )
}
