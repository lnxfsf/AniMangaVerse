

import '../styles/UpcomingCarousel.css'


import TouchCarousel from 'react-touch-carousel'



export default function UpcomingCarousel() {

    // data for carousel: https://reactjsexample.com/ultra-customizable-carousel-framework-for-react-js/
    const data = [
        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        },
        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        },

        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        }, {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        },
        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        },

        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        }, {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        },
        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        },

        {
            title: 'SPYxFAMILY',

            season: 'Season 2',
            start_date: 'October 2023',
            image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg'

        }






    ]


    return <>

        <div className="line"> </div>

        <div className="main1 flex flex-col 	">


            <div className="small_header1 ml-10 mt-6 "  >
                {/* check index.css, for global use, vertical rectangle.. */}
                <div className="rectangle_taller"></div>

                <div>
                    <h3>Top 3 Upcoming animes:</h3>
                    <p>Season - fall 2023</p>
                </div>




            </div>



            {/* just to design individual item for carousel */}



            {/* container for items */}
            <div className="flex flex-row gap-3 justify-center mt-2">


                {/* items */}
                <div className="item flex flex-col justify-start ">


                    {/* image */}
                    {/* TODO , image need to scale well. to be by square. whatever image it is. or somehow to do it automatically */}
                    <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg" />

                    <div className="line"> </div>

                    <div className="inner flex flex-col gap-2 justify-start items-start ml-4 mt-4">

                        <h1>SPYxFAMILY</h1>
                        <p>Season 3</p>


                    </div>


                    <p className="release_date mt-16 ml-4 " >October 2023</p>



                </div>


                {/* items */}
                <div className="item flex flex-col justify-start ">


                    {/* image */}
                    {/* TODO , image need to scale well. to be by square. whatever image it is. or somehow to do it automatically */}
                    <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg" />

                    <div className="line"> </div>

                    <div className="inner flex flex-col gap-2 justify-start items-start ml-4 mt-4">

                        <h1>SPYxFAMILY</h1>
                        <p>Season 3</p>


                    </div>


                    <p className="release_date mt-16 ml-4 " >October 2023</p>



                </div>


                {/* items */}
                <div className="item flex flex-col justify-start ">


                    {/* image */}
                    {/* TODO , image need to scale well. to be by square. whatever image it is. or somehow to do it automatically */}
                    <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg" />

                    <div className="line"> </div>

                    <div className="inner flex flex-col gap-2 justify-start items-start ml-4 mt-4">

                        <h1>SPYxFAMILY</h1>
                        <p>Season 3</p>


                    </div>


                    <p className="release_date mt-16 ml-4 " >October 2023</p>



                </div>




            </div>


        </div>

    </>


}