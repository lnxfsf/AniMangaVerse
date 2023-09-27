
import '../styles/BrowseHome.css'

import { Link } from 'react-router-dom'


const data = [
    {
        title: 'ONE PIECE',

        anime_id: 2,
        season: 'Season 2',
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'

    },
    {
        title: 'Mushoku Tensei',
        anime_id: 3,

        season: 'Season 3',
        start_date: 'October 2023',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

    },

    {
        title: 'Zom 100',

        anime_id: 4,
        season: 'Season 4',
        start_date: 'October 2024',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

    }, {
        title: 'JUJUTSU KAISEN',

        anime_id: 5,
        season: 'Season 5',
        start_date: 'October 2025',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

    },
    {
        title: 'Horimiya',

        anime_id: 6,
        season: 'Season 6',
        start_date: 'October 2026',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

    },

    {
        title: 'My Happy Marriage',

        anime_id: 7,
        season: 'Season 7',
        start_date: 'October 2027',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

    }, {
        title: 'GOBLIN SLAYER II',

        anime_id: 8,
        season: 'Season 8',
        start_date: 'October 2028',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

    },
    {
        title: 'The Eminence in Shadow',

        anime_id: 9,
        season: 'Season 9',
        start_date: 'October 2029',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

    },

    {
        title: 'Demon Slayer',

        anime_id: 10,
        season: 'Season 10',
        start_date: 'October 2030',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

    },
    {
        title: 'Attack on Titan',

        anime_id: 11,
        season: 'Season 11',
        start_date: 'October 2031',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

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


const studio = [
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
]

export default function BrowseHome() {

    return <>


        <div className="main2 flex justify-center items-center ">

        

        {/* 
// TODO , and with data we get in search, we need to pass and send it to BE. but dont bother. wait first BE to finish what they have ...
        */}
            <div className="basis-1/4">

                <div className="filter flex flex-col border-2 border-pinky m-6 ">

                    <h1 className="self-center m-4 mt-8 ">Browse</h1>

                    <div className="flex flex-col  justify-start ml-3 mt-3">
                        <p className="filter_txt">Search:</p>


                        <div className="search-container">
                            <div className="input-container">
                                <input type="text" placeholder="Search" />
                                <button className="search-icon"><i className='bx bx-search-alt-2'></i></button>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col  justify-start ml-3 mt-3">
                        <p className="filter_txt">Genres:</p>

                        <select class="dropdown-select_g" multiple>

                            {/* all genres possible */}

                            {genres.map((item, index) => (

                                <option value={item} key={index}>{item}</option>



                            ))}



                        </select>


                    </div>

                    <div className="flex flex-col  justify-start ml-3 mt-3">
                        <p className="filter_txt">Year:</p>


                        <select class="dropdown-select" >

                            <option disabled selected>Year</option>
                            {/*  years from 1940 to 2023 */}

                            {year.map((item, index) => (

                                <option value={item} key={index}>{item}</option>



                            ))}




                        </select>



                    </div>

                    <div className="flex flex-col  justify-start ml-3 mt-3">
                        <p className="filter_txt">Studio:</p>



                        <select class="dropdown-select">
                            <option selected disabled>Studio</option>

                            {/*  choose studios */}

                            {studio.map((item, index) => (

                                <option value={item} key={index}>{item}</option>



                            ))}


                        </select>





                    </div>


                    <button className="submit bg-pinky rounded-xl  self-center p-2 m-3 mt-6 mb-4">Submit</button>

                </div>



            </div>



            <div className="cards_container grow p-14">




                {/*TODO, you should fix that grid, just to stretch a little bit more..  */}
                <div className="  grid grid-cols-4 gap-x-6 gap-y-6  grow " >


                    {/*individual card. if it is anime or manga (it will pass anime or manga id, depending which one it is..).
that is purpose of ternary operator down below in <Link>  */}
                    {data.map((item, index) => (



                        <Link to="/detailedpage" state={{ id: item.anime_id ? item.anime_id : item.manga_id, anime: !!item.anime_id }}>
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



        </div>


    </>

}