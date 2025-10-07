import React, { CSSProperties, MouseEvent, PropsWithChildren } from 'react'
import {
  useColorField,
  useNumberField,
  useStringField
} from '@modbros/dashboard-sdk'

export const Button = (
  props: PropsWithChildren<{ onClick?: (event: MouseEvent) => void }>
) => {
  const { onClick, children } = props

  // icon
  const iconColor = useColorField({ field: 'icon_color' })

  // padding
  const padding = useNumberField({ field: 'padding' })

  // background
  const backgroundColor = useColorField({ field: 'background_color' })

  // border
  const borderColor = useColorField({ field: 'border_color' })
  const borderWidth = useNumberField({ field: 'border_width', defaultValue: 0 })
  const borderRadius = useStringField({
    field: 'border_radius',
    defaultValue: ''
  })

  const style: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    cursor: 'pointer'
  }

  if (!iconColor.isEmpty()) {
    style.color = iconColor.toRgbaCss()
  }

  if (!backgroundColor.isEmpty()) {
    style.backgroundColor = backgroundColor.toRgbaCss()
  }

  if (!borderColor.isEmpty()) {
    style.borderColor = borderColor.toRgbaCss()
  }

  style.borderStyle = 'solid'
  style.borderWidth = borderWidth
  style.borderRadius = borderRadius.match(/^\d+$/)
    ? `${borderRadius}px`
    : borderRadius

  style.padding = padding ? `${padding}px` : undefined

  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  )
}
