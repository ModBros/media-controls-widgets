import React from 'react'
import { useSelectField } from '@modbros/dashboard-sdk'
import { MediaControlIcons } from '../../icons/media-control-icons'
import { Button } from '../../components/Button'

const MediaControl = () => {
  const iconName = useSelectField({ field: 'icon', defaultValue: 'play' })
  const Icon = MediaControlIcons[iconName] ?? null

  return (
    <Button>
      <Icon />
    </Button>
  )
}

export default MediaControl
