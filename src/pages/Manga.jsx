





import '../styles/Manga.css'
import { Link } from 'react-router-dom'





// data
// const data = [
//     {
//         title: 'ONE PIECE',

//         anime_id: 2,
//         season: 'Season 2',
//         start_date: 'October 2022',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'

//     },
//     {
//         title: 'Mushoku Tensei',
//         anime_id: 3,

//         season: 'Season 3',
//         start_date: 'October 2023',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

//     },

//     {
//         title: 'Zom 100',

//         anime_id: 4,
//         season: 'Season 4',
//         start_date: 'October 2024',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

//     }, {
//         title: 'JUJUTSU KAISEN',

//         anime_id: 5,
//         season: 'Season 5',
//         start_date: 'October 2025',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

//     },
//     {
//         title: 'Horimiya',

//         anime_id: 6,
//         season: 'Season 6',
//         start_date: 'October 2026',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

//     },

//     {
//         title: 'My Happy Marriage',

//         anime_id: 7,
//         season: 'Season 7',
//         start_date: 'October 2027',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

//     }, {
//         title: 'GOBLIN SLAYER II',

//         anime_id: 8,
//         season: 'Season 8',
//         start_date: 'October 2028',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

//     },
//     {
//         title: 'The Eminence in Shadow',

//         anime_id: 9,
//         season: 'Season 9',
//         start_date: 'October 2029',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

//     },

//     {
//         title: 'Demon Slayer',

//         anime_id: 10,
//         season: 'Season 10',
//         start_date: 'October 2030',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

//     },
//     {
//         title: 'Attack on Titan',

//         anime_id: 11,
//         season: 'Season 11',
//         start_date: 'October 2031',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

//     },



//     {
//         title: 'ONE PIECE',

//         anime_id: 2,
//         season: 'Season 2',
//         start_date: 'October 2022',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'

//     },
//     {
//         title: 'Mushoku Tensei',
//         anime_id: 3,

//         season: 'Season 3',
//         start_date: 'October 2023',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

//     },

//     {
//         title: 'Zom 100',

//         anime_id: 4,
//         season: 'Season 4',
//         start_date: 'October 2024',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

//     }, {
//         title: 'JUJUTSU KAISEN',

//         anime_id: 5,
//         season: 'Season 5',
//         start_date: 'October 2025',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

//     },
//     {
//         title: 'Horimiya',

//         anime_id: 6,
//         season: 'Season 6',
//         start_date: 'October 2026',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

//     },

//     {
//         title: 'My Happy Marriage',

//         anime_id: 7,
//         season: 'Season 7',
//         start_date: 'October 2027',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

//     }, {
//         title: 'GOBLIN SLAYER II',

//         anime_id: 8,
//         season: 'Season 8',
//         start_date: 'October 2028',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

//     },
//     {
//         title: 'The Eminence in Shadow',

//         anime_id: 9,
//         season: 'Season 9',
//         start_date: 'October 2029',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

//     },

//     {
//         title: 'Demon Slayer',

//         anime_id: 10,
//         season: 'Season 10',
//         start_date: 'October 2030',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

//     },
//     {
//         title: 'Attack on Titan',

//         anime_id: 11,
//         season: 'Season 11',
//         start_date: 'October 2031',
//         image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

//     }














// ]





// data
const data = [
    {
        title: 'Chainsaw Man',

        manga_id: 1,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-82gwrvQV6OBc.png'

    },
    {
        title: 'Jujutsu Kaisen',

        manga_id: 2,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg'

    },

    {
        title: 'Omniscient Reader',

        manga_id: 3,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119257-KzlNZtgbRzxF.jpg'

    },

    {
        title: 'One Piece',

        manga_id: 4,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-tZVlfBCHbrNL.jpg'

    },

    {
        title: 'Frieren: Beyond Journey’s End',

        manga_id: 5,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx118586-F0Lp86XQV7du.jpg'

    },

    {
        title: 'Latna Saga: Survival of a Sword King',

        manga_id: 6,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx114605-MYUWMsdjry6m.jpg'

    },


    {
        title: 'The Infinite Mage',

        manga_id: 7,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx159930-pX4aWN9aqihH.jpg'

    },

    {
        title: 'Kingdom',

        manga_id: 8,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx46765-KPXir4sRqJBW.png'

    },


    {
        title: 'Eleceed',

        manga_id: 9,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106929-flAUvHZDUz5v.jpg'

    },


    {
        title: 'Kagurabachi',

        manga_id: 10,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx169355-aLIPeq4iQfbK.jpg'

    },

    {
        title: 'The Legend of the Northern Blade',

        manga_id: 11,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119521-qYqxFvn0NnXo.png'

    },

    {
        title: 'Duke Pendragon: Master of the White Dragon',

        manga_id: 12,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx143025-YL8hzpkVFR5J.jpg'

    },


    {
        title: 'Overgeared',

        manga_id: 13,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117460-46JbftfHSXoc.jpg'

    }

]

const genres = [
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
    "Harem",
    "Hentai",
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
    "Yaoi",
    "Yuri",
];

const year = [1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]



const publishing = ['Releasing', 'Finished', 'Not Yet Released', 'Hiatus', 'Cancelled']

const country_origin = ['Japan', 'South Corea', 'China', 'Taiwan']

export default function Manga() {

    return <>


        <div className="main3">



            <div className="filter1 grid grid-cols-6 p-6 ">


                <div className="flex flex-col  justify-start ml-3 mt-3">
                    <p className="filter_txt1">Search:</p>


                    <div className="search-container">
                        <div className="input-container1">
                            <input type="text" placeholder="Search" />
                            <button className="search-icon"><i className='bx bx-search-alt-2'></i></button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col  justify-start ml-3 mt-3">
                    <p className="filter_txt1">Genres:</p>

                    <select className="dropdown-select_g1" multiple>

                        {/* all genres possible */}

                        {genres.map((item, index) => (

                            <option value={item} key={index}>{item}</option>



                        ))}



                    </select>


                </div>

                <div className="flex flex-col  justify-start ml-3 mt-3">
                    <p className="filter_txt1">Year:</p>


                    <select className="dropdown-select1" >

                        <option disabled selected>Year</option>
                        {/*  years from 1940 to 2023 */}

                        {year.map((item, index) => (

                            <option value={item} key={index}>{item}</option>



                        ))}




                    </select>



                </div>

                <div className="flex flex-col  justify-start ml-3 mt-3">
                    <p className="filter_txt1">Publishing Status:</p>



                    <select className="dropdown-select1">
                        <option selected disabled>Publishing Status</option>

                        {/*  choose studios */}

                        {publishing.map((item, index) => (

                            <option value={item} key={index}>{item}</option>



                        ))}


                    </select>





                </div>



                <div className="flex flex-col  justify-start ml-3 mt-3">
                    <p className="filter_txt1">Country Of Origin:</p>



                    <select className="dropdown-select1">
                        <option selected disabled>Country Of Origin</option>

                        {/*  choose studios */}

                        {country_origin.map((item, index) => (

                            <option value={item} key={index}>{item}</option>



                        ))}


                    </select>





                </div>




            </div>






            <div className=" cards_container1 grid grid-cols-6 gap-x-6 gap-y-6 p-6  " >


                {data.map((item, index) => (



                    <Link to="/detailedpage" state={{ id: item.manga_id, anime: false }}>
                        <div className="card">
                            <img src={item.image} />




                            <div className="flex flex-row gap-x-2 mt-3"   >
                                {/* check index.css, for global use, vertical rectangle.. */}
                                <div className="rectangle_smaller"></div>

                                <p className="title8">{item.title}</p>

                                {/*TODO you add favorite button, and for it to work properly */}
                            </div>


                        </div>
                    </Link>

                ))}




            </div>





        </div>





    </>

}