
import '../styles/DetailedPage.css'

import { useLocation } from 'react-router-dom'




// this is representing object that is fetched from database (subsequently), depending if it is 'anime_id' or 'manga_id', but format should be same.. 

// it is BE job to give us 'image', wheter it is anime or manga
// TODO. image should be anime_url , and manga_url . 
// TODO also, anime_id , and manga_id , you should expect in response. so, here you filter only ...
// TODO .. just we will sort this later ..



const data = [
    {


        id: 2,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,
        start_date: 1646924800000,
        end_date: 1646924800000,

        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'


    },
    {


        id: 3,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,
        start_date: 1646924800000,
        end_date: 1646924800000,


        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

    },

    {


        id: 4,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,
        start_date: 1646924800000,
        end_date: 1646924800000,


        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

    }, {



        id: 5,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,


        start_date: 1646924800000,
        end_date: 1646924800000,

        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

    },
    {



        id: 11,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,

        start_date: 1646924800000,
        end_date: 1646924800000,
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

    },

    {


        id: 6,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,

        start_date: 1646924800000,
        end_date: 1646924800000,

        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

    }, {


        id: 7,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,

        start_date: 1646924800000,
        end_date: 1646924800000,

        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

    },
    {


        id: 8,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,

        start_date: 1646924800000,
        end_date: 1646924800000,


        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

    },

    {

        id: 9,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,


        start_date: 1646924800000,
        end_date: 1646924800000,


        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

    },
    {


        id: 10,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,


        start_date: 1646924800000,
        end_date: 1646924800000,

        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

    }






]


var title, genre, episodes, seasons, start_date, end_date, image;

export default function DetailedPage() {


    // this is prop from  UpcomingCarousel (anime_id), passed throught <Link> 
    const location = useLocation()
    const { id, anime } = location.state



    //TODO, in fact, we only need this 'anime' variable for actual fetching !!! if 'anime' is true then to fetch from 'anime' table, and if not then from 'manga' table ! . or something like that

    // if this is anime in question
    if (anime) {


        // TODO fetch anime data by 'id'  to be in object. (for now, assume we have data in object we will use here)
        // just extract it into variables.. so I can show them.. 
        // it will get 'id' .. but we will know if it is anime if it have prop passed as 'anime: true'. or manga if it is 'anime: false'



        data.forEach((item) => {

            if (item.id == id) {

                title = item.title;

                episodes = item.episodes;
                seasons = item.seasons;
                start_date = item.start_date;
                end_date = item.end_date;

                image = item.image;

                genre = item.genre;




            }

        });







    } else {


        console.log("manga");
        // then it is manga for sure
        //

        data.forEach((item) => {

            if (item.id == id) {

                title = item.title;

                episodes = 'manga';
                seasons = 'manga';
                start_date = item.start_date;
                end_date = item.end_date;

                image = item.image;

                genre = item.genre;




            }

        });


    }


    return <>



        <h1>{title}</h1>

        <img src={image}></img>





        {/* show all genres it belongs */}
        {genre.map((item, index) => (
            <div key="index">

                <p>{item}</p>


            </div>
        ))}







    </>

}