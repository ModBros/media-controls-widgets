import React, { MouseEvent, useCallback } from 'react'
import {
  useActionField,
  useMemoizedMetricField,
  useRipple
} from '@modbros/dashboard-sdk'
import { ChannelValue } from '@modbros/dashboard-core'
import { Button } from '../../components/Button'
import { PauseIcon } from '../../icons/PauseIcon'
import { PlayIcon } from '../../icons/PlayIcon'

const PlayingControl = () => {
  const memo = useCallback((value: ChannelValue | null) => {
    return value?.value?.value
  }, [])

  const playing = useMemoizedMetricField({
    field: 'playing_metric',
    memo
  })

  const isPlaying = Boolean(playing?.value)
  const play = useActionField({ field: 'play_action' })
  const pause = useActionField({ field: 'pause_action' })
  const ripple = useRipple()

  const onClick = (event: MouseEvent) => {
    console.log('!!', isPlaying)

    ripple(event.clientX, event.clientY)

    isPlaying ? pause() : play()
  }

  return (
    <Button onClick={onClick}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )
}

export default PlayingControl
