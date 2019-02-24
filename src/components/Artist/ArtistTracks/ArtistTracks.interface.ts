import { Track } from '../../../shared/interfaces/Track.interface';

interface OwnProps {
  tracks: Track[];
  currentVideoUrl: string;
  setCurrentVideoUrl: any;
}

interface DispatchProps {
  setCurrentVideoUrl: any;
}

export type TrackProps = OwnProps & DispatchProps;
