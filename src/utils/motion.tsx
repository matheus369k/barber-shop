'use client'

import type { ComponentProps } from 'react'
import { motion } from 'motion/react'

export function ShowingViewWrapper({
  className,
  children,
}: ComponentProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
      }}
      {...(className && { className: className })}
    >
      {children}
    </motion.div>
  )
}
