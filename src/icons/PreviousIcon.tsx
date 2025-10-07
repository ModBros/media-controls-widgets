import React from 'react'
import { Icon, IconProps } from './Icon'

export const PreviousIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d='M17 17L17 3L8 10L17 17Z' fill='currentColor' />
      <rect x='3' y='3' width='5' height='14' fill='currentColor' />
    </Icon>
  )
}
