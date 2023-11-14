import TitleComponent from "@/components/molecules/title.components";
import { ListResponse } from "@/interface/list.interface";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Search = async ({ params }: { params: { keywords: string } }) => {
  const animes: ListResponse = await fetch(
    `${process.env.ANIME_BASE_URL_API}/anime?q=${params.keywords}&limit=14`
  ).then((el) => el.json());

  const listAnime: ReactNode = animes.data.map((el) => {
    return (
      <Link
        key={el.mal_id}
        href={`/${el.mal_id}/${el.title.replaceAll(" ", "_")}`}
      >
        <div className="rounded-lg bg-main-light text-main-dark group relative">
          <div className="w-full h-[280px] overflow-hidden rounded-lg">
            <Image
              src={
                el.images.jpg.large_image_url.includes("apple-touch-icon")
                  ? "/no-image.jpg"
                  : el.images.jpg.large_image_url
              }
              alt={el.title}
              width={100}
              height={100}
              className="w-full h-full group-hover:scale-[1.2] transition-all rounded-lg"
            />
          </div>
          <div className="absolute bottom-0 w-full p-2 rounded-b-lg bg-gradient-to-t from-main-dark to-transparent text-main-light scale-y-0 group-hover:scale-y-100 transition-all origin-bottom">
            <span className="text-sm">
              {el.title.length < 20 ? el.title : el.title.slice(0, 20) + "..."}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs">
                Episodes: {el.episodes ?? "-"} Episodes
              </span>
              <span className="text-xs">Score: {el.score} ⭐</span>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="grid grid-cols-1">
      <div className="col-span-1 py-2">
        <TitleComponent title={`Search Result For ${params.keywords} :`} />
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full mb-[40px]">
          <div className="col-span-1 md:col-span-3 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mt-4">
              {listAnime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
