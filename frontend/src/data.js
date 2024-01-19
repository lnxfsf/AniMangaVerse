
// Import Axios
import axios from 'axios';

// Create an Axios instance
const apiInstance = axios.create({
  baseURL: 'https://animanga-fklg.onrender.com/api', // Set the base URL for the API
});




// Show loader while loading
const loaderInterval = setInterval(() => {
  console.log('Loading...');
}, 1000);



// Make a GET request to the API
apiInstance.get('/')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  })
  .finally(() => {

    // Hide loader when loading is finished
    clearInterval(loaderInterval);
    console.log('Loading finished.');
  });






  
// dummy anime data values
export const anime_data = [
  {
    title: "ONE PIECE",


    genre: ["adventure", "drama","crime", "crime", "adventure", "adventure", "adventure"],
    anime_id: 1,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2024-10-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Mushoku Tensei",


    genre: ["adventure", "drama", "crime", "adventure", "adventure", "adventure"],

    anime_id: 2,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2028-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: "2023-03-25",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-33RDijfuxLLk.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },

  {
    title: "Zoom 100",


    genre: ["adventure", "drama", "crime", "adventure", "adventure", "adventure"],
    anime_id: 3,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: "2023-03-25",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/159831-FWfdyqpxhLli.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "JUJUTSU KAISEN",

    genre: ["adventure", "drama", "crime", "adventure", "adventure", "adventure"],
    anime_id: 4,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2027-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Horimiya",

    genre: ["adventure", "drama", "crime"],
    anime_id: 5,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2027-04-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "My Happy Marriage",

    genre: ["adventure", "drama", "crime"],
    anime_id: 6,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: "2027-05-25",

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/147103-MwFq1R7jphZT.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "GOBLIN SLAYER II",

    genre: ["adventure", "drama", "crime"],
    anime_id: 7,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2027-08-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/129188-3PyIXSkmcOPH.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "The Eminence in Shadow",

    genre: ["adventure", "drama", "crime"],
    anime_id: 8,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2024-12-30",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130298-9yxFlFvKMwRk.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Demon Slayer",

    genre: ["adventure", "drama", "crime"],
    anime_id: 9,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-01-10",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Attack on Titan",

    genre: ["adventure", "drama", "crime"],
    anime_id: 10,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "ONE PIECE",

    genre: ["adventure", "drama", "crime"],
    anime_id: 11,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2020-10-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Mushoku Tensei",

    genre: ["adventure", "drama", "crime"],
    anime_id: 12,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2020-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-33RDijfuxLLk.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },

  {
    title: "Zoom 100",

    genre: ["adventure", "drama", "crime"],
    anime_id: 13,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/159831-FWfdyqpxhLli.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "JUJUTSU KAISEN",

    genre: ["adventure", "drama", "crime"],
    anime_id: 14,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Horimiya",

    genre: ["adventure", "drama", "crime"],
    anime_id: 15,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/124080-ARyLAHHgikRq.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "My Happy Marriage",

    genre: ["adventure", "drama", "crime"],
    anime_id: 16,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/147103-MwFq1R7jphZT.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "GOBLIN SLAYER II",

    genre: ["adventure", "drama", "crime"],
    anime_id: 17,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/129188-3PyIXSkmcOPH.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "The Eminence in Shadow",

    genre: ["adventure", "drama", "crime"],
    anime_id: 18,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130298-9yxFlFvKMwRk.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Demon Slayer",

    genre: ["adventure", "drama", "crime"],
    anime_id: 19,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
  {
    title: "Attack on Titan",

    genre: ["adventure", "drama", "crime"],
    anime_id: 20,
    seasons: 20,

    user_id: 1,

    //aired
    start_date: "2023-03-25",
    // TODO if null , then show 'hasn't landed yet.. '
    end_date: null,

    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
    background_image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",

    // number of favorites
    num_of_fav: 323,
    desc: "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",

    studio: "Toei Animation",
    episodes: 420,

    yt_trailer:
      "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP ",
  },
];

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

    background_image:
      "",
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

    background_image:
      "",
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

    background_image:
      "",
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


export const favorites = [

{

	user_id: 1,
	anime_id: 2,
	manga_id: null

},
{

	user_id: 1,
	anime_id: 3,
	manga_id: null

},
{

	user_id: 2,
	anime_id: 8,
	manga_id: null

},
{

	user_id: 1,
	anime_id: null,
	manga_id: 3

},


{

	user_id: 1,
	anime_id: null,
	manga_id: 9

},


]

// options for dropdowns
export const genres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Historical",
  "Horror",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
];

export const year = [
  2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
  2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998,
  1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985,
  1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972,
  1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960, 1959,
  1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950, 1949, 1948, 1947, 1946,
  1945, 1944, 1943, 1942, 1941, 1940,
];

export const studio = [
  "3Hz",
  "A.C.G.T",
  "A.P.P.P.",
  "Actas",
  "Ajia-do Animation Works",
  "Anime International Company (AIC)",
  "Arms Corporation (defunct)",
  "Artland",
  "Artmic (defunct)",
  "Arvo Animation",
  "Nippon Rois Cartoon (Regional Service Division for Japan from Indonesia)",
  "Ashi Productions",
  "Asahi Production",
  "Asread",
  "AXsiZ",
  "Bandai Namco Pictures",
  "Bee Train",
  "Bibury Animation Studios",
  "Blue Lynx",
  "Bones",
  "Brain's Base",
  "Bridge (studio)",
  "C2C",
  "Chaos Project",
  "CoMix Wave Films",
  "Connect (studio) (defunct, absorbed by Silver Link and then dissolved)",
  "Creators in Pack",
  "C-Station",
  "CygamesPictures",
  "Daume",
  "David Production",
  "Diomeda",
  "DLE",
  "Doga Kobo",
  "ENGI",
  "EMT Squared",
];

export const season = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149,
];

export const episodes = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
  160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
  175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204,
  205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234,
  235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249,
  250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264,
  265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279,
  280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294,
  295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309,
  310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324,
  325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339,
  340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354,
  355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369,
  370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384,
  385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399,
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
  415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429,
  430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444,
  445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459,
  460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474,
  475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489,
  490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504,
  505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519,
  520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534,
  535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549,
];

export const publishing = [
  "Releasing",
  "Finished",
  "Not Yet Released",
  "Hiatus",
  "Cancelled",
];

export const country_origin = ["Japan", "South Corea", "China", "Taiwan"];
