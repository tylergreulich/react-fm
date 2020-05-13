import React from 'react'
import ReactPlayer from 'react-player'

export const playerControlsHook = () => {
  const playerRef = React.createRef<ReactPlayer>()

  const [isPlaying, setIsPlaying] = React.useState<boolean>(true)

  const toggleIsPlaying = () => {
    if (playerRef.current && playerRef.current.props.playing) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  return { isPlaying, toggleIsPlaying, playerRef }
}
