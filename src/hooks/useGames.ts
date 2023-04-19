import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number
  }
 
const useGames = (gameQyerry: GameQuery) =>
 useData<Game>('/games', {params:
   {genres: gameQyerry.genre?.id, 
    platforms: gameQyerry.platform?.id,
    ordering: gameQyerry.sortOder,
    search: gameQyerry.searchtext
  }},
 [gameQyerry])

export default useGames