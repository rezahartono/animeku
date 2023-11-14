import TitleComponent from "@/components/molecules/title.components";
import { ListResponse } from "@/interface/list.interface";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Upcoming = async () => {
  const upcomingAnimes: ListResponse = await fetch(
    process.env.ANIME_BASE_URL_API + "/anime?sfw=true&status=upcoming&limit=20"
  ).then((el) => el.json());

  const recomendedAnimes: ListResponse = await fetch(
    process.env.ANIME_BASE_URL_API +
      "/anime?min_score=8&sfw=true&order_by=popularity&limit=10"
  ).then((el) => el.json());
  const listUpcomingAnime: ReactNode = upcomingAnimes.data.map((el) => {
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

  const listRecomendedAnime: ReactNode = recomendedAnimes.data.map(
    (el, index) => {
      return (
        <Link
          key={el.mal_id}
          href={`/${el.mal_id}/${el.title.replaceAll(" ", "_")}`}
        >
          <div
            key={el.mal_id}
            className="h-[100px] w-full flex items-center gap-2 ring-main-primary"
          >
            <span>{index + 1}</span>
            <div className="w-[80px] h-full overflow-hidden rounded-lg">
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
            <div className="flex flex-col justify-between text-main-light">
              <span className="text-md">{el.title}</span>
              <div className="flex flex-col gap-1">
                <span className="text-xs">Ranked: #{el.rank}</span>
                <span className="text-xs">
                  Episodes: {el.episodes ?? "-"} Episodes
                </span>
                <span className="text-xs">Score: {el.score} ⭐</span>
              </div>
            </div>
          </div>
        </Link>
      );
    }
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full mb-[40px]">
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <TitleComponent title="Upcoming Anime" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {listUpcomingAnime}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <TitleComponent title="Recomended Anime" href="/" />
          <div className="grid grid-cols-1 gap-4 mt-4">
            {listRecomendedAnime}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
