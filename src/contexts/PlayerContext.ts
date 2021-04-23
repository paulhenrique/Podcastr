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
}
interface PlayerContextData extends PlayerProperties {
  episodeList: Episode[];
  currentEpisodeIndex:number;
  
}

export const PlayerContext = createContext({}  as PlayerContextData);