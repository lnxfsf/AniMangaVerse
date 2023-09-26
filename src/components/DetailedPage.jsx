
import '../styles/DetailedPage.css'

import { useLocation } from 'react-router-dom'

export default function DetailedPage () {

 
    // this is prop from  UpcomingCarousel (anime_id), passed throught <Link> 
    const location = useLocation()
    const {  anime_id } = location.state
    


    // if this is anime in question
    if(anime_id){
        

        // TODO fetch anime data by 'anime_id'  to be in object. (for now, assume we have data in object we will use here)
        

        



    }


    return <>
    
    <h1>{anime_id}</h1>
    </>

}