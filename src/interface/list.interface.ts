import { AnimeList } from "./anime-list.interface";
import { Pagination } from "./pagination.interface";

export interface ListResponse {
  data: AnimeList[];
  pagination: Pagination;
}
