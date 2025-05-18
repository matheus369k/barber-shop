import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitles'
import { SectionTextContent } from '@/components/SectionTextContent'
import {
  ServiceItemContent,
  ServiceItemImage,
  ServiceItemPrice,
  ServiceItemRoot,
  ServiceItemTitle,
} from '@/components/ServicesItem'

import AdultHaircut from '@/assets/adult-haircut.svg'
import KidsHaircut from '@/assets/kids-haircut.svg'
import BeardTrim from '@/assets/beard-trim.svg'
import NeckShave from '@/assets/barber-shop-tool.svg'
import ScalpMoisturizing from '@/assets/scalp-moisturizing.svg'
import BeardGrooming from '@/assets/barber-shop-person.svg'
import ThumbnailMain from '@/assets/thumbnail-person.jpg'
import HandsomeMan from '@/assets/handsome-man.jpg'
import Licensed from '@/assets/licensed.svg'
import Masters from '@/assets/masters.svg'
import Trusted from '@/assets/trusted.svg'
import Google from '@/assets/google.svg'
import Tripadvisor from '@/assets/tripadvisor.svg'
import ProfilerPerson from '@/assets/profiler-person.png'

import {
  ChooseUsReasonsCardHeaderContent,
  ChooseUsReasonsCardImage,
  ChooseUsReasonsCardRoot,
  ChooseUsReasonsCardTitle,
} from '@/components/ChooseUsReasonsCard'
import {
  ChooseUsReviewCardImage,
  ChooseUsReviewCardMainContent,
  ChooseUsReviewCardReviews,
  ChooseUsReviewCardRoot,
  ChooseUsReviewCardScore,
  ChooseUsReviewCardStars,
  ChooseUsReviewCardTitle,
} from '@/components/ChooseUsReviewCard'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <main className='min-h-dvh h-fit py-36 flex flex-col gap-36'>
      <section className='flex gap-4 justify-between w-full m-auto max-w-7xl'>
        <div className='flex flex-col gap-6 max-w-[31.25rem]'>
          <SectionTitle>Your personal barber service at your home</SectionTitle>
          <SectionTextContent>
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo
          </SectionTextContent>

          <div className='flex justify-between gap-4'>
            <div className='space-y-2.5 max-w-44'>
              <h3 className='font-extrabold font-mono text-5xl'>
                99
                <span className='text-orange-200'>%</span>
              </h3>
              <span className='font-extrabold uppercase font-mono tracking-wider text-xl'>
                Customer Satisfaction
              </span>
            </div>
            <div className='space-y-2.5 max-w-44'>
              <h3 className='font-extrabold font-mono text-5xl'>
                10
                <span className='text-orange-200'>+</span>
              </h3>
              <span className='font-extrabold uppercase font-mono tracking-wider text-xl'>
                years of experience
              </span>
            </div>
          </div>
        </div>

        <Image
          width={600}
          height={600}
          src={ThumbnailMain}
          alt='Homem sentado em barbearia, usando capa preta, enquanto o barbeiro corta seu cabelo com tesoura e pente.'
        />
      </section>

      <section
        id='services'
        className='flex flex-col items-center gap-16 max-w-5xl m-auto'
      >
        <div className='flex flex-col gap-9'>
          <SectionTitle>Browse our services</SectionTitle>
          <div className='max-w-[31.25rem]'>
            <SectionTextContent orientation='center'>
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo eget.
            </SectionTextContent>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6'>
          <ul className='grid grid-cols-2 grid-rows-3 gap-x-16 gap-y-24 p-24 bg-white shadow-2xl'>
            <ServiceItemRoot>
              <ServiceItemImage
                src={AdultHaircut}
                alt='icon with comb and scissors one next to the other'
              />
              <ServiceItemContent>
                <ServiceItemTitle>Adult haircut</ServiceItemTitle>
                <SectionTextContent>
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequatolm pulvinar sagittis
                </SectionTextContent>
                <ServiceItemPrice>$39 USD</ServiceItemPrice>
              </ServiceItemContent>
            </ServiceItemRoot>
            <ServiceItemRoot>
              <ServiceItemImage src={KidsHaircut} alt='icon with comb' />
              <ServiceItemContent>
                <ServiceItemTitle>Kids Haircut</ServiceItemTitle>
                <SectionTextContent>
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequatolm pulvinar sagittis
                </SectionTextContent>
                <ServiceItemPrice>$19 USD</ServiceItemPrice>
              </ServiceItemContent>
            </ServiceItemRoot>
            <ServiceItemRoot>
              <ServiceItemImage src={BeardTrim} alt='icon with Beard Trim' />
              <ServiceItemContent>
                <ServiceItemTitle>Beard Trim</ServiceItemTitle>
                <SectionTextContent>
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequatolm pulvinar sagittis
                </SectionTextContent>
                <ServiceItemPrice>$29 USD</ServiceItemPrice>
              </ServiceItemContent>
            </ServiceItemRoot>
            <ServiceItemRoot>
              <ServiceItemImage src={NeckShave} alt='icon with Neck Shave' />
              <ServiceItemContent>
                <ServiceItemTitle>Neck Shave</ServiceItemTitle>
                <SectionTextContent>
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequatolm pulvinar sagittis
                </SectionTextContent>
                <ServiceItemPrice>$39 USD</ServiceItemPrice>
              </ServiceItemContent>
            </ServiceItemRoot>
            <ServiceItemRoot>
              <ServiceItemImage
                src={ScalpMoisturizing}
                alt='icon with Scalp Moisturizing'
              />
              <ServiceItemContent>
                <ServiceItemTitle>Scalp Moisturizing</ServiceItemTitle>
                <SectionTextContent>
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequatolm pulvinar sagittis
                </SectionTextContent>
                <ServiceItemPrice>$10 USD</ServiceItemPrice>
              </ServiceItemContent>
            </ServiceItemRoot>
            <ServiceItemRoot>
              <ServiceItemImage
                src={BeardGrooming}
                alt='icon with Beard Grooming'
              />
              <ServiceItemContent>
                <ServiceItemTitle>Beard Grooming</ServiceItemTitle>
                <SectionTextContent>
                  Nulla egestas sapien integer mi fermentum tellus tristique
                  consequatolm pulvinar sagittis
                </SectionTextContent>
                <ServiceItemPrice>$49 USD</ServiceItemPrice>
              </ServiceItemContent>
            </ServiceItemRoot>
          </ul>

          <a href='#appointment'>
            <Button type='button' className='hover:ring-black hover:text-black'>
              Book an Appointment
            </Button>
          </a>
        </div>
      </section>

      <section className='relative pt-36 pb-16 h-fit bg-gradient-to-br from-black/50 to-transparent'>
        <div className='w-full max-h-[31.25rem] h-full aspect-video absolute top-0 left-0 -z-10'>
          <Image
            height={500}
            width={1462}
            src={HandsomeMan}
            className='object-cover w-full h-full'
            alt='Homem sentado em uma barbearia, recebendo um corte de cabelo com máquina, enquanto usa o celular. O ambiente tem iluminação quente e estilo moderno.'
          />
        </div>

        <div className='max-w-4xl m-auto flex flex-col items-center gap-12 text-white'>
          <SectionTitle orientation='center'>
            Experience the luxury of concierge barber services at your home
          </SectionTitle>
          <a href='#appointment'>
            <Button type='button'>Book an Appointment</Button>
          </a>
        </div>
      </section>

      <section className='flex flex-col gap-36 max-w-7xl m-auto w-full'>
        <div className='flex flex-col items-center gap-16 '>
          <div className='flex flex-col items-center gap-9 max-w-[31.25rem]'>
            <SectionTitle>why choose us</SectionTitle>
            <SectionTextContent orientation='center'>
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo eget.
            </SectionTextContent>
          </div>

          <ul className='flex justify-between gap-4 w-full'>
            <ChooseUsReasonsCardRoot>
              <ChooseUsReasonsCardHeaderContent>
                <ChooseUsReasonsCardImage
                  src={Licensed}
                  alt='Mostra um selo com uma borda ondulada e uma marca de verificação (check) no centro, simbolizando aprovação, conformidade ou certificação oficial.'
                />
                <ChooseUsReasonsCardTitle>Licensed</ChooseUsReasonsCardTitle>
              </ChooseUsReasonsCardHeaderContent>
              <SectionTextContent orientation='center'>
                Our team of licensed and insured barbers follow strict
                cleanliness and sanitation guidelines for a safe and comfortable
                experience.
              </SectionTextContent>
            </ChooseUsReasonsCardRoot>

            <ChooseUsReasonsCardRoot>
              <ChooseUsReasonsCardHeaderContent>
                <ChooseUsReasonsCardImage
                  src={Masters}
                  alt='Mostra uma face com cabelo, barba e bigode, feito. associando esse ícone ao cabeleireiro.'
                />
                <ChooseUsReasonsCardTitle>Masters</ChooseUsReasonsCardTitle>
              </ChooseUsReasonsCardHeaderContent>
              <SectionTextContent orientation='center'>
                Our barbers are passionate about their craft and aim to provide
                high-quality haircuts for every client.
              </SectionTextContent>
            </ChooseUsReasonsCardRoot>

            <ChooseUsReasonsCardRoot>
              <ChooseUsReasonsCardHeaderContent>
                <ChooseUsReasonsCardImage
                  src={Trusted}
                  alt='Mostra um escudo com uma marca de verificação no centro, remetendo à ideia de segurança, confiabilidade e proteção.'
                />
                <ChooseUsReasonsCardTitle>Trusted</ChooseUsReasonsCardTitle>
              </ChooseUsReasonsCardHeaderContent>
              <SectionTextContent orientation='center'>
                We have a strong online reputation with a 5-star rating from
                over 100 thousand satisfied clients.
              </SectionTextContent>
            </ChooseUsReasonsCardRoot>
          </ul>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <ChooseUsReviewCardRoot>
            <ChooseUsReviewCardImage
              src={Google}
              alt='This is logo of the google showing a word G with multi colors'
            />
            <ChooseUsReviewCardMainContent>
              <ChooseUsReviewCardTitle>Google</ChooseUsReviewCardTitle>
              <ChooseUsReviewCardScore>4.9</ChooseUsReviewCardScore>
              <ChooseUsReviewCardStars score={4.9} />
              <ChooseUsReviewCardReviews>196 reviews</ChooseUsReviewCardReviews>
            </ChooseUsReviewCardMainContent>
          </ChooseUsReviewCardRoot>

          <div className='relative max-w-[37.5rem] border border-orange-200'>
            <Image
              src={ProfilerPerson}
              width={112}
              height={112}
              alt='This is photo the profiler with men of the front'
              className='absolute left-1/2 top-0 -translate-1/2'
            />
            <div className='flex flex-col gap-3 items-center px-9 pt-20 pb-24'>
              <ChooseUsReviewCardStars score={5.0} />
              <div className='flex flex-col gap-4 items-center'>
                <ChooseUsReviewCardTitle>
                  THE BEST BARBER Services
                </ChooseUsReviewCardTitle>
                <SectionTextContent orientation='center'>
                  Et proin ut in dignissim sem non a nullam magna lectus urna et
                  dui quam tellus imperdiet sit purus at fringilla scelerisque
                  diam amet fermentum orci fringilla aliquet nulla lectus erat
                  eu auctor
                </SectionTextContent>
                <span className='font-mono font-bold text-base uppercase text-center'>
                  SAM HOUSTON
                </span>
              </div>
            </div>
          </div>

          <ChooseUsReviewCardRoot>
            <ChooseUsReviewCardImage
              src={Tripadvisor}
              alt='This is logo from Tripadvisor showing a owl and background green'
            />
            <ChooseUsReviewCardMainContent>
              <ChooseUsReviewCardTitle>Tripadvisor</ChooseUsReviewCardTitle>
              <ChooseUsReviewCardScore>5.0</ChooseUsReviewCardScore>
              <ChooseUsReviewCardStars score={5.0} />
              <ChooseUsReviewCardReviews>196 reviews</ChooseUsReviewCardReviews>
            </ChooseUsReviewCardMainContent>
          </ChooseUsReviewCardRoot>
        </div>
      </section>
    </main>
  )
}
