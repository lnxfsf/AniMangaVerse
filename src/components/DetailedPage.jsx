
import '../styles/DetailedPage.css'

import { useLocation } from 'react-router-dom'




// this is representing object that is fetched from database (subsequently), depending if it is 'anime_id' or 'manga_id', but format should be same.. 

// it is BE job to give us 'image', wheter it is anime or manga
// TODO. image should be anime_url , and manga_url . 
// TODO also, anime_id , and manga_id , you should expect in response. so, here you filter only ...
// TODO .. just we will sort this later ..  
//TODO both data need to be in sync regarding 'id' 



// anime_data
const anime_data = [
    {
        title: 'ONE PIECE',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 1,
        season: 'Season 2',
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'

    },
    {
        title: 'Mushoku Tensei',
        anime_id: 2,

        genre: ['adventure', 'drama', 'crime'],
        season: 'Season 3',
        start_date: 'October 2023',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

    },

    {
        title: 'Zom 100',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 3,
        season: 'Season 4',
        start_date: 'October 2024',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

    }, {
        title: 'JUJUTSU KAISEN',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 4,
        season: 'Season 5',
        start_date: 'October 2025',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

    },
    {
        title: 'Horimiya',
        genre: ['adventure', 'drama', 'crime'],

        anime_id: 5,
        season: 'Season 6',
        start_date: 'October 2026',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

    },

    {
        title: 'My Happy Marriage',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 6,
        season: 'Season 7',
        start_date: 'October 2027',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

    }, {
        title: 'GOBLIN SLAYER II',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 7,
        season: 'Season 8',
        start_date: 'October 2028',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

    },
    {
        title: 'The Eminence in Shadow',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 8,
        season: 'Season 9',
        start_date: 'October 2029',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

    },

    {
        title: 'Demon Slayer',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 9,
        season: 'Season 10',
        start_date: 'October 2030',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

    },
    {
        title: 'Attack on Titan',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 10,
        season: 'Season 11',
        start_date: 'October 2031',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

    },



    {
        title: 'ONE PIECE',
        genre: ['adventure', 'drama', 'crime'],

        anime_id: 1,
        season: 'Season 2',
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg'

    },
    {
        title: 'Mushoku Tensei',
        anime_id: 2,

        genre: ['adventure', 'drama', 'crime'],
        season: 'Season 3',
        start_date: 'October 2023',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png'

    },

    {
        title: 'Zom 100',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 3,
        season: 'Season 4',
        start_date: 'October 2024',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

    }, {
        title: 'JUJUTSU KAISEN',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 4,
        season: 'Season 5',
        start_date: 'October 2025',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'

    },
    {
        title: 'Horimiya',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 5,
        season: 'Season 6',
        start_date: 'October 2026',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg'

    },

    {
        title: 'My Happy Marriage',
        genre: ['adventure', 'drama', 'crime'],

        anime_id: 6,
        season: 'Season 7',
        start_date: 'October 2027',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

    }, {
        title: 'GOBLIN SLAYER II',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 7,
        season: 'Season 8',
        start_date: 'October 2028',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129188-zWPBGutZXgjZ.jpg'

    },
    {
        title: 'The Eminence in Shadow',

        genre: ['adventure', 'drama', 'crime'],
        anime_id: 8,
        season: 'Season 9',
        start_date: 'October 2029',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161964-JpkEbHI8ivaP.jpg'

    },

    {
        title: 'Demon Slayer',
        genre: ['adventure', 'drama', 'crime'],

        anime_id: 9,
        season: 'Season 10',
        start_date: 'October 2030',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-PEn1CTc93blC.jpg'

    },
    {
        title: 'Attack on Titan',
        genre: ['adventure', 'drama', 'crime'],

        anime_id: 10,
        season: 'Season 11',
        start_date: 'October 2031',
        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg'

    },







]


// manga data
const manga_data = [
    {
        title: 'Chainsaw Man',

        genre: ['adventure', 'drama', 'crime'],
        manga_id: 1,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-82gwrvQV6OBc.png'

    },
    {
        title: 'Jujutsu Kaisen',

        genre: ['adventure', 'drama', 'crime'],
        manga_id: 2,

        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg'

    },

    {
        title: 'Omniscient Reader',
        genre: ['adventure', 'drama', 'crime'],

        manga_id: 3,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119257-KzlNZtgbRzxF.jpg'

    },

    {
        title: 'One Piece',
        genre: ['adventure', 'drama', 'crime'],

        manga_id: 4,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-tZVlfBCHbrNL.jpg'

    },

    {
        title: 'Frieren: Beyond Journey’s End',
        genre: ['adventure', 'drama', 'crime'],

        manga_id: 5,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx118586-F0Lp86XQV7du.jpg'

    },

    {
        title: 'Latna Saga: Survival of a Sword King',
        genre: ['adventure', 'drama', 'crime'],

        manga_id: 6,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx114605-MYUWMsdjry6m.jpg'

    },


    {
        genre: ['adventure', 'drama', 'crime'],
        title: 'The Infinite Mage',

        manga_id: 7,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx159930-pX4aWN9aqihH.jpg'

    },

    {
        genre: ['adventure', 'drama', 'crime'],
        title: 'Kingdom',

        manga_id: 8,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx46765-KPXir4sRqJBW.png'

    },


    {
        title: 'Eleceed',

        genre: ['adventure', 'drama', 'crime'],
        manga_id: 9,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106929-flAUvHZDUz5v.jpg'

    },


    {
        title: 'Kagurabachi',
        genre: ['adventure', 'drama', 'crime'],

        manga_id: 10,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx169355-aLIPeq4iQfbK.jpg'

    },

    {
        title: 'The Legend of the Northern Blade',

        genre: ['adventure', 'drama', 'crime'],
        manga_id: 11,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119521-qYqxFvn0NnXo.png'

    },

    {
        title: 'Duke Pendragon: Master of the White Dragon',

        genre: ['adventure', 'drama', 'crime'],
        manga_id: 12,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx143025-YL8hzpkVFR5J.jpg'

    },


    {
        title: 'Overgeared',
        genre: ['adventure', 'drama', 'crime'],

        manga_id: 13,
        start_date: 'October 2022',
        image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117460-46JbftfHSXoc.jpg'

    }

]



var title, genre, episodes, seasons, start_date, end_date, image;                    

export default function DetailedPage () {

 
    // this is prop from  UpcomingCarousel (anime_id), passed throught <Link> 
    const location = useLocation()
    const {  id, anime } = location.state
    


    //TODO, in fact, we only need this 'anime' variable for actual fetching !!! if 'anime' is true then to fetch from 'anime' table, and if not then from 'manga' table ! . or something like that

    // if this is anime in question
    if(anime){
        

        // TODO fetch anime data by 'id'  to be in object. (for now, assume we have data in object we will use here)
        // just extract it into variables.. so I can show them.. 
            // it will get 'id' .. but we will know if it is anime if it have prop passed as 'anime: true'. or manga if it is 'anime: false'
        


        anime_data.forEach((item) => {

            if (item.anime_id == id) {

                title = item.title;

                episodes = item.episodes;
                seasons = item.seasons;
                start_date = item.start_date;
                end_date = item.end_date;
                
                image = item.image;
                
                genre = item.genre;




            }

        });



        



    }else{
        

        console.log("manga");
        // then it is manga for sure
        //

 manga_data.forEach((item) => {

            if (item.manga_id == id) {

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