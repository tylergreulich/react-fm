import { Track } from '../../../shared/interfaces/Track.interface';

export interface TrackProps {
  tracks: Track[];
  currentVideoUrl: string;
  setCurrentVideoUrl: any;
}
