import type { ComponentProps } from 'react'

interface AppointmentErrorMessageProps extends ComponentProps<'p'> {
  error: string | undefined
}

export function AppointmentErrorMessage({
  error,
  ...props
}: AppointmentErrorMessageProps) {
  if (!error) return null

  return (
    <p
      {...props}
      className='text-sm text-red-400 tracking-wider absolute -bottom-6 left-0'
    >
      {error}
    </p>
  )
}
