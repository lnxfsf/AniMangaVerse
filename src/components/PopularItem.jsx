import { GenreBullet } from "./GenreBullet"
export const PopularItem = ({ title,  subtitle, image, seasons, year, age_restriction = "13", about, genres}) =>{

    return <>
    <div className="backgroundDiv" style={{ background : "url("+image+")"}}>
        <div className="container">
            <div className="content">
                <div className="mainTitle">
                    <h3>New Season</h3>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <h4>{seasons} {seasons>1?"seasons":"season"} - {(year.split("-"))[0]} - <span className="secondaryText">{age_restriction}+</span></h4>
                <p>{about.substring(0,257)+"..." }</p>

                <div className="genres">
                    {
                        genres.map((genre,i) => <GenreBullet genre={genre} key={i}/>)
                    }
                </div>
            </div>
        </div>
    </div>
    
    </>
}