import Image from 'next/image'
import ThumbnailMain from '@/assets/thumbnail-person.jpg'

export default function Home() {
  return (
    <main className='min-h-dvh h-fit pt-44'>
      <section className='flex gap-4 justify-between w-full m-auto max-w-7xl'>
        <div className='flex flex-col gap-6 max-w-[31.25rem]'>
          <h2 className='font-mono font-extrabold text-5xl tracking-wider text-left uppercase'>
            Your personal barber service at your home
          </h2>
          <p className='font-sans font-normal text-base leading-6'>
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo
          </p>

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
    </main>
  )
}
