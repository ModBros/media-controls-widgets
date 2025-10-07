import React from 'react'
import { Icon, IconProps } from './Icon'

export const PauseIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <rect fill='currentColor' x='4' y='3' width='5' height='14' />
      <rect fill='currentColor' x='11' y='3' width='5' height='14' />
    </Icon>
  )
}
