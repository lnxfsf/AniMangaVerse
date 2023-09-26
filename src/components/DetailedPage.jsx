
import '../styles/DetailedPage.css'

import { useLocation } from 'react-router-dom'




// this is representing object that is fetched from database (subsequently), depending if it is 'anime_id' or 'manga_id', but format should be same.. 

// it is BE job to give us 'image', wheter it is anime or manga
const data = [
    {


        anime_id: 2,

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


        anime_id: 3,

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


        anime_id: 4,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,
        start_date: 1646924800000,
        end_date: 1646924800000,


        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-TxAC0ujoLTK6.png'

    }, {



        anime_id: 5,

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



        anime_id: 5,

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


        anime_id: 6,

        user_id: 1,

        title: 'ONE PIECE',
        genre: ['action', 'comedy', 'drama', 'fantasy', 'adventure'],
        episodes: 32,

        seasons: 4,

        start_date: 1646924800000,
        end_date: 1646924800000,

        image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147103-Om2LOXlhHNAe.png'

    }, {


        anime_id: 7,

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


        anime_id: 8,

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

        anime_id: 9,

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


        anime_id: 10,

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

export default function DetailedPage () {

 
    // this is prop from  UpcomingCarousel (anime_id), passed throught <Link> 
    const location = useLocation()
    const {  anime_id } = location.state
    


    // if this is anime in question
    if(anime_id){
        

        // TODO fetch anime data by 'anime_id'  to be in object. (for now, assume we have data in object we will use here)
        // just extract it into variables.. so I can show them.. 
        

        data.forEach((item) => {

            if (item.anime_id == anime_id) {

                title = item.title;

                episodes = item.episodes;
                seasons = item.seasons;
                start_date = item.start_date;
                end_date = item.end_date;
                
                image = item.image;
                
                console.log(item.genre);
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