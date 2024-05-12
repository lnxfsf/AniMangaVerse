import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

const loaderInterval = setInterval(() => {
  console.log("Loading...");
}, 1000);

let studio = [];
let genres = [];
let season = [];
let episodes = [];

export let anime_data = [];

apiInstance
  .get("/ListAnime")
  .then((response) => {
    anime_data = response.data;
    console.log(response.data);

    // uzima samo dostupne studios iz animes koje ima
    studio = anime_data.map((anime) => anime.studio);

    // uzima samo dostupne genres iz animes koje ima
    anime_data.forEach((anime) => {
      anime.genre.forEach((genre) => {
        let formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
        if (!genres.includes(formattedGenre)) {
          genres.push(formattedGenre);
        }
      });

      // ovo sada za sezone, prvo najveci, i onda ide od najmanji do najveceg...
      let highestSeason = 0;
      anime_data.forEach((anime) => {
        if (anime.seasons > highestSeason) {
          highestSeason = anime.seasons;
        }
      });

      for (let i = 1; i <= highestSeason; i++) {
        if (!season.includes(i)) {
          season.push(i);
        }
      }

      // to isto i za epizode

      let highestEpisode = 0;
      anime_data.forEach((anime) => {
        if (anime.episodes > highestEpisode) {
          highestEpisode = anime.episodes;
        }
      });

      for (let i = 1; i <= highestEpisode; i++) {
        if (!episodes.includes(i)) {
          episodes.push(i);
        }
      }
    });

    return anime_data;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    clearInterval(loaderInterval);
    console.log("Loading finished.");
  });

// dummy manga data values
export const manga_data = [
  {
    title: "Chainsaw Man",

    genre: ["adventure", "drama", "crime"],
    manga_id: 1,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-82gwrvQV6OBc.png",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/105778-wk5qQ7zAaTGl.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },
  {
    title: "Jujutsu Kaisen",

    genre: ["adventure", "drama", "crime"],
    manga_id: 2,

    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/101517-FrJtb3Th3HtF.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Omniscient Reader",
    genre: ["adventure", "drama", "crime"],

    manga_id: 3,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119257-KzlNZtgbRzxF.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/119257-RtxJMRCunHXc.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "One Piece",
    genre: ["adventure", "drama", "crime"],

    manga_id: 4,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-tZVlfBCHbrNL.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/30013-hbbRZqC5MjYh.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Frieren: Beyond Journey's End",
    genre: ["adventure", "drama", "crime"],

    manga_id: 5,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx118586-F0Lp86XQV7du.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/118586-1JLJiwaIlnBp.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Latna Saga: Survival of a Sword King",
    genre: ["adventure", "drama", "crime"],

    manga_id: 6,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx114605-MYUWMsdjry6m.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/114605-TdVVCVg2jj28.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    genre: ["adventure", "drama", "crime"],
    title: "The Infinite Mage",

    manga_id: 7,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx159930-pX4aWN9aqihH.jpg",

    background_image: "",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    genre: ["adventure", "drama", "crime"],
    title: "Kingdom",

    manga_id: 8,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx46765-KPXir4sRqJBW.png",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/46765-8DqCBEYyt9yP.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Eleceed",

    genre: ["adventure", "drama", "crime"],
    manga_id: 9,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106929-flAUvHZDUz5v.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/106929-jYmT1n3Z0m46.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Kagurabachi",
    genre: ["adventure", "drama", "crime"],

    manga_id: 10,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx169355-aLIPeq4iQfbK.jpg",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/169355-MzURKZ3veXa7.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "The Legend of the Northern Blade",

    genre: ["adventure", "drama", "crime"],
    manga_id: 11,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119521-qYqxFvn0NnXo.png",

    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/banner/119521-CPhjvDuMReVg.jpg",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Duke Pendragon: Master of the White Dragon",

    genre: ["adventure", "drama", "crime"],
    manga_id: 12,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx143025-YL8hzpkVFR5J.jpg",

    background_image: "",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },

  {
    title: "Overgeared",
    genre: ["adventure", "drama", "crime"],

    manga_id: 13,
    start_date: "October 2022",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117460-46JbftfHSXoc.jpg",

    background_image: "",
    status: "Releasing",
    country_origin: "Japan",

    user_id: 1,
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",

    end_date: "2023-03-25",
  },
];

export const year = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
  1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986,
  1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973,
  1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960,
  1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950, 1949, 1948, 1947,
  1946, 1945, 1944, 1943, 1942, 1941, 1940,
];

export const publishing = [
  "Releasing",
  "Finished",
  "Not Yet Released",
  "Hiatus",
  "Cancelled",
];

//TODO, i search, za epizode i ostalo, to treba samo, sve što je manje od toga..

export const country_origin = ["Japan", "South Corea", "China", "Taiwan"];

export { studio, genres, season, episodes };
