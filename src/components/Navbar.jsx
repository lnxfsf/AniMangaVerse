
import '../styles/navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar () {

    return <>

        <nav>

            <div className="first">

                <Link class="first_img" to="/" ><img src="BabyBananya.png" /></Link>
                <Link class="first_h2" to="/">AniManga Verse</Link>


            </div>

            <div className="second">
        

            <Link to="/">Home</Link>
            <Link to="/anime">Anime</Link>
            <Link to="/manga">Manga</Link>
            <Link to="/explore">Explore</Link>

        


            {/*in index.html, boxicons, imported as css. use it as 'Font' */}
            <img src="bxs-user-circle.svg"  className="profile_icon  rounded-full  border-2 border-pinky"/>



            </div>


        </nav>



    
    </>
    
}