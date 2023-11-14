import { Images } from "./images.interface";

export interface DetailAnime {
  mal_id: number;
  title: string;
  episodes: number;
  score: number;
  rank: number;
  year: number;
  images: Images;
}
