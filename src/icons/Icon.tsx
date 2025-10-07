import React, { PropsWithChildren } from 'react'

export interface IconProps {}

export const Icon = (props: PropsWithChildren<IconProps>) => {
  const { children } = props

  return (
    <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
      {children}
    </svg>
  )
}
