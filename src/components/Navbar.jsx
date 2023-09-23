
import '../styles/navbar.css'


export default function Navbar () {

    return <>

        <nav>

            <div class="first">

                <img src="BabyBananya.png" />
                <h2>AniManga Verse</h2>


            </div>

            <div class="second">
        

            <a>Home</a>
            <a>Anime</a>
            <a>Manga</a>
            <a>Explore</a>

        
        <div class="profile_icon">

            {/*in index.html, boxicons, imported as css. use it as 'Font' */}
            <i class='bx bxs-user-circle'></i>


        </div>

            </div>


        </nav>



    
    </>
    
}