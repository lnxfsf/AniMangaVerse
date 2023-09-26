
import '../styles/BrowseHome.css'

import { Link } from 'react-router-dom'



// data  : https://reactjsexample.com/ultra-customizable-carousel-framework-for-react-js/
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


export default function BrowseHome() {

    return <>


        <div className="main2 flex justify-center items-center ">

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

                        <select class="dropdown-select">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>


                    </div>

                    <div className="flex flex-col  justify-start ml-3 mt-3">
                        <p className="filter_txt">Year:</p>


                        <select class="dropdown-select">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>



                    </div>

                    <div className="flex flex-col  justify-start ml-3 mt-3">
                        <p className="filter_txt">Studio:</p>



                        <select class="dropdown-select">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>





                    </div>


                    <button className="submit bg-pinky rounded-xl  self-center p-2 m-3 mt-6 mb-4">Submit</button>

                </div>



            </div>



            <div className="cards_container grow p-14">




                {/*TODO, you should fix that grid, just to stretch a little bit more..  */}
                <div className="cards  grid grid-cols-4 gap-x-36 gap-y-6  grow " >


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