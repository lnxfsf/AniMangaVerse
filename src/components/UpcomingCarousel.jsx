

import '../styles/UpcomingCarousel.css'

import { Link } from 'react-router-dom'

import React, { useEffect } from 'react';

import ScrollCarousel from 'scroll-carousel';

// data for carousel: https://reactjsexample.com/ultra-customizable-carousel-framework-for-react-js/
const data = [
    {
        title: 'ONE PIECE',

        season: 'Season 2',
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'

    },
    {
        title: 'Mushoku Tensei',

        season: 'Season 3',
        start_date: 'October 2023',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

    },

    {
        title: 'Zom 100',

        season: 'Season 4',
        start_date: 'October 2024',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

    }, {
        title: 'JUJUTSU KAISEN',

        season: 'Season 5',
        start_date: 'October 2025',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

    },
    {
        title: 'Horimiya',

        season: 'Season 6',
        start_date: 'October 2026',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

    },

    {
        title: 'My Happy Marriage',

        season: 'Season 7',
        start_date: 'October 2027',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

    }, {
        title: 'GOBLIN SLAYER II',

        season: 'Season 8',
        start_date: 'October 2028',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

    },
    {
        title: 'The Eminence in Shadow',

        season: 'Season 9',
        start_date: 'October 2029',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

    },

    {
        title: 'Demon Slayer',

        season: 'Season 10',
        start_date: 'October 2030',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

    },
    {
        title: 'Attack on Titan',

        season: 'Season 11',
        start_date: 'October 2031',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

    }






]


export default function UpcomingCarousel() {




    useEffect(() => {

        let main1 = document.querySelector('.main1');

        // don't put it in a variable, then it won't work! 
        //https://asif-jalil.github.io/scroll-carousel-website/#api
        new ScrollCarousel(main1, {
            autoplay: true,
            autoplaySpeed: 8,
            smartSpeed: true,
            slideSelector: '.carousel-container',
            direction: 'ltr', // ltr
            speed: 7,
            margin: 24,
        });





    }, []);


    return <>

        <div className="line"> </div>



        <div className="main1 flex flex-col 	">

            {/* this is just container for showing title and then carousel */}
            <div className="small_header1 ml-10 mt-6 "  >
                {/* check index.css, for global use, vertical rectangle.. */}
                <div className="rectangle_taller"></div>

                <div>
                    <h3>Top 3 Upcoming animes:</h3>
                    <p>Season - fall 2023</p>
                </div>




            </div>





            <div className="carousel-container">
                {/* container for items*/}

                <div className="flex  flex-row gap-3 justify-center mt-2">


                    {/* TODO from server we should get 10 items that are most recent by  'release_date'.   */}
                    {/* show items (render from object) dynamically render items */}
                    {data.map((item, index) => (


                        <Link to="/anime">
                            <div className="item flex flex-col justify-start " key={index}>


                                {/* image */}
                                {/* TODO , image need to scale well. to be by square. whatever image it is. or somehow to do it automatically */}
                                <img src={item.image} alt={item.title} />

                                <div className="line"> </div>

                                <div className="inner flex flex-col gap-2 justify-start items-start ml-4 mt-4">

                                    <h1 >{item.title}</h1>
                                    <p >{item.season}</p>


                                </div>


                                <p className="release_date mt-16 ml-4 " >{item.start_date}</p>



                            </div>
                        </Link>




                    ))}



                </div>
            </div>

        </div>

    </>


}