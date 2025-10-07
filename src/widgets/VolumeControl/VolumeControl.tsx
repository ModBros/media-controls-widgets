import React, { useCallback } from 'react'
import { useMemoizedMetricField } from '@modbros/dashboard-sdk'
import { ChannelValue } from '@modbros/dashboard-core'
import { VolumeIcon } from './VolumeIcon'
import { MuteIcon } from '../../icons/MuteIcon'
import { Button } from '../../components/Button'
import { isNil } from 'lodash-es'

const VolumeControl = () => {
  const memo = useCallback((value: ChannelValue | null) => {
    return value?.value?.value
  }, [])

  const volume = useMemoizedMetricField({
    field: 'volume_metric',
    memo
  })

  const mute = useMemoizedMetricField({
    field: 'mute_metric',
    memo
  })

  if (mute?.value) {
    return (
      <Button>
        <MuteIcon />
      </Button>
    )
  }

  return (
    <Button>
      <VolumeIcon
        volume={!isNil(volume?.value) ? parseFloat(volume.value.toString()) : 0}
      />
    </Button>
  )
}

export default VolumeControl
