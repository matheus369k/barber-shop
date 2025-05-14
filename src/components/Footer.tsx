import { GrFacebookOption } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import bgFooter from '@/assets/bg-footer.jpg'
import Image from 'next/image'
import { MdPhoneInTalk } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'
import { MapLocation } from './MapLocation'
import { FormAppointment } from './FormAppointment'
import { SectionTitle } from './SectionTitles'
import { SectionTextContent } from './SectionTextContent'

export function Footer() {
  return (
    <footer className='mt-4'>
      <div className='relative bg-gradient-to-r from-black/80 to-transparent'>
        <div className='w-full max-h-[641px] h-full aspect-video absolute top-0 left-0 -z-10'>
          <Image
            height={641}
            width={1462}
            src={bgFooter}
            className='object-cover w-full h-full'
            alt='Homem sentado em uma barbearia, recebendo um corte de cabelo com máquina, enquanto usa o celular. O ambiente tem iluminação quente e estilo moderno.'
          />
        </div>

        <div className='relative max-w-7xl m-auto pt-36 pb-20 flex text-white'>
          <div className='flex flex-col gap-6 max-w-[31.25rem]'>
            <SectionTitle>make an appointment</SectionTitle>
            <SectionTextContent>
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo
            </SectionTextContent>
            <div className='flex gap-10'>
              <i className='p-3.5 bg-white'>
                <MdPhoneInTalk className='size-9 text-black' />
              </i>
              <div className='flex flex-col justify-center gap-2'>
                <h3 className='font-mono font-extrabold text-base tracking-wider uppercase'>
                  Give us a Call
                </h3>
                <span className='font-mono text-xl font-normal'>
                  (475) 453 - 3465
                </span>
              </div>
            </div>
            <div className='flex gap-10'>
              <i className='p-3.5 bg-white'>
                <HiMail className='size-9 text-black' />
              </i>
              <div className='flex flex-col justify-center gap-2'>
                <h3 className='font-mono font-extrabold text-base tracking-wider uppercase'>
                  Send us an email
                </h3>
                <span className='font-mono text-xl font-normal'>
                  hello@example.com
                </span>
              </div>
            </div>
          </div>

          <FormAppointment />
        </div>
      </div>

      <MapLocation />

      <div className='bg-black text-white'>
        <div className='max-w-7xl m-auto flex justify-between items-center h-20 p-4'>
          <p className='font-sans font-normal text-base'>
            © Copyright 2022 barbershop - All right reserved
          </p>
          <div className='flex items-center gap-8'>
            <GrFacebookOption className='size-6 transition-transform hover:scale-105' />
            <FaTwitter className='size-6 transition-transform hover:scale-105' />
            <FaInstagram className='size-6 transition-transform hover:scale-105' />
            <FaPinterestP className='size-6 transition-transform hover:scale-105' />
            <FaLinkedinIn className='size-6 transition-transform hover:scale-105' />
          </div>
        </div>
      </div>
    </footer>
  )
}
