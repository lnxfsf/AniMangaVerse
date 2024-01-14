import { anime_data, manga_data } from "../../data";

var dataObject = {};

export function getDataObject(id, anime) {
  if (anime) {
    anime_data.forEach((item) => {
      if (item.anime_id == id) {
        dataObject = {
          title: item.title,
          episodes: item.episodes,
          seasons: item.seasons,
          start_date: item.start_date || "Hasn’t aired yet",
          end_date: item.end_date || "Hasn’t ended yet",
          background_image: item.background_image || "#111",
          genre: item.genre,
          num_of_fav: item.num_of_fav,
          studio: item.studio,
          desc: item.desc,
          yt_trailer: item.yt_trailer,
        };
      }
    });
  } else {
    manga_data.forEach((item) => {
      if (item.manga_id == id) {
        dataObject = {
          title: item.title,
          episodes: "manga",
          seasons: "manga",
          start_date: item.start_date || "Hasn’t aired yet",
          end_date: item.end_date || "Hasn’t ended yet",
          background_image: item.background_image || "#111",
          genre: item.genre,
          num_of_fav: item.num_of_fav,
          status: item.status,
          country_origin: item.country_origin,
          desc: item.desc,
          yt_trailer: item.yt_trailer,
        };
      }
    });
  }

  return dataObject;
}
