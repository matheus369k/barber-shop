import type { ComponentProps } from 'react'

interface AppointmentInputProps extends ComponentProps<'input'> {}

export function AppointmentInput({ ...props }: AppointmentInputProps) {
  return (
    <input
      {...props}
      className='w-full h-8 border-b-2 border-b-black focus:border-b-orange-200 transition-colors duration-300'
    />
  )
}
