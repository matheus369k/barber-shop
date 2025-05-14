import type { ComponentProps } from 'react'

interface AppointmentLabelProps extends ComponentProps<'label'> {}

export function AppointmentLabel({ ...props }: AppointmentLabelProps) {
  return (
    <label
      {...props}
      className='font-mono text-base font-bold tracking-wider uppercase text-nowrap'
    />
  )
}
