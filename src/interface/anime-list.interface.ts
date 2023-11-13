import { Images } from "./images.interface";

export interface AnimeList {
  mal_id: number;
  title: string;
  episodes: number;
  score: number;
  rank: number;
  year: number;
  images: Images;
}
