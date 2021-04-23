import {createContext} from 'react';

type Episode = {
  title:string;
  members:string;
  thumbnail:string;
  duration:number;
  url:string;
}

class PlayerProperties {
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
}
interface PlayerContextData extends PlayerProperties {
  episodeList: Episode[];
  currentEpisodeIndex:number;
  isPlaying: boolean;
}

export const PlayerContext = createContext({}  as PlayerContextData);