import { SetCurrentSongPayload } from '../../store/actions/lastFmActions'

interface OwnProps {
  isVideoLoading?: boolean
  currentVideoUrl?: string
  toggleIsPlaying: () => void
  isPlaying: boolean | null | undefined
  isReady: boolean
  songDuration: number | null
  songPlayedSeconds: number | null
}

interface StateProps {
  currentSong?: SetCurrentSongPayload
}

export type PlayerControlsProps = OwnProps & StateProps
