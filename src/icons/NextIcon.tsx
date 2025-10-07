import React from 'react'
import { Icon, IconProps } from './Icon'

export const NextIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path fill='currentColor' d='M3 3V17L12 10L3 3Z' />
      <rect fill='currentColor' x='12' y='3' width='5' height='14' />
    </Icon>
  )
}
