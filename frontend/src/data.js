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
let country_origin = [];

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

let manga_data = [];

apiInstance
  .get("/ListManga")
  .then((response) => {
    manga_data = response.data;
    console.log(response.data);

    // uzima samo dostupne genres iz manga koje ima
    manga_data.forEach((manga) => {
      manga.genre.forEach((genre) => {
        let formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
        if (!genres.includes(formattedGenre)) {
          genres.push(formattedGenre);
        }
      });
    });

    // country origin, odakle je
    manga_data.forEach((manga) => {
      let formattedCountry_origin =
        manga.country_origin.charAt(0).toUpperCase() +
        manga.country_origin.slice(1);
      if (!country_origin.includes(formattedCountry_origin)) {
        country_origin.push(formattedCountry_origin);
      }
    });

    return manga_data;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    clearInterval(loaderInterval);
    console.log("Loading finished.");
  });

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

export { studio, genres, season, episodes, manga_data, country_origin };
