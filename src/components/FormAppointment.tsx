'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AppointmentLabel } from './AppointmentLabel'
import { AppointmentErrorMessage } from './AppointmentErrorMessage'
import { AppointmentInput } from './AppointmentInput'
import { Button } from './Button'

const FormAppointmentSchema = z.object({
  fullName: z.string().min(3, 'This Name is invalid!'),
  subject: z.string().min(3, 'This Subject is invalid!'),
  phoneNumber: z
    .string()
    .regex(
      /^\+?\d{0,3}\s?\(?\d{2,3}\)?\s?\d{4,5}-?\d{4}$/,
      'This phone number is invalid!'
    ),
  mail: z.string().email('This E-mail is invalid!'),
  message: z
    .string()
    .min(10, 'This message cannot less 10 words!')
    .max(1000, 'This message cannot more 1000 words"'),
})

type FormAppointment = z.infer<typeof FormAppointmentSchema>

export function FormAppointment() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(FormAppointmentSchema),
  })

  async function InviteFormAppointment(data: FormAppointment) {
    await new Promise(() =>
      setTimeout(() => {
        console.log(data)
        reset()
      }, 2000)
    )
  }

  return (
    <form
      onSubmit={handleSubmit(InviteFormAppointment)}
      className='min-lg:max-w-[37.5rem] min-sm:max-h-[37.5rem] w-full h-fit bg-white text-black shadow-2xl py-8 px-4 min-lg:p-9 pb-12 absolute right-0 top-[22rem] min-md:top-72 min-lg:top-40 z-50 flex flex-col gap-6'
    >
      <div className='relative w-full'>
        <AppointmentLabel htmlFor='full-name'>Full Name</AppointmentLabel>
        <AppointmentInput
          {...register('fullName')}
          type='text'
          name='fullName'
          id='ful-name'
        />
        <AppointmentErrorMessage error={errors.fullName?.message} />
      </div>
      <div className='relative w-full'>
        <AppointmentLabel htmlFor='subject'>Subject</AppointmentLabel>
        <AppointmentInput
          {...register('subject')}
          type='text'
          name='subject'
          id='subject'
        />
        <AppointmentErrorMessage error={errors.subject?.message} />
      </div>
      <div className='flex flex-col min-sm:flex-row gap-6'>
        <div className='relative w-full'>
          <AppointmentLabel htmlFor='phone-number'>
            Phone Number
          </AppointmentLabel>
          <AppointmentInput
            {...register('phoneNumber')}
            type='text'
            name='phoneNumber'
            id='phone-number'
          />
          <AppointmentErrorMessage error={errors.phoneNumber?.message} />
        </div>
        <div className='relative w-full'>
          <AppointmentLabel htmlFor='email'>E-mail Address</AppointmentLabel>
          <AppointmentInput
            {...register('mail')}
            type='email'
            name='mail'
            id='email'
          />
          <AppointmentErrorMessage error={errors.mail?.message} />
        </div>
      </div>
      <div className='relative flex flex-col gap-4'>
        <AppointmentLabel htmlFor='message'>
          Please type your message here...
        </AppointmentLabel>
        <textarea
          className='w-full h-28 border-b-2 border-b-black focus:border-b-orange-200 transition-colors duration-300'
          {...register('message')}
          name='message'
          id='message'
          style={{ resize: 'none' }}
        />
        <AppointmentErrorMessage error={errors.message?.message} />
      </div>
      <Button
        disabled={isSubmitting}
        className='w-fit mt-6 disabled:cursor-not-allowed disabled:bg-transparent disabled:ring-black hover:text-black hover:ring-black mx-auto'
        type='submit'
      >
        Book an Appointment
      </Button>
    </form>
  )
}
