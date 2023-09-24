

import '../styles/footer.css'
import { Link } from 'react-router-dom'


export default function Navbar() {

    return <>

        <div className="line"> </div>


        <footer>

            <div className="first">

                <div>

                    <div className="small_header" >
                        {/* check index.css, for global use, vertical rectangle.. */}
                        <div className="rectangle"></div>
                        <h3>Contacts:</h3>
                    </div>

                    <p>support@animelist.me</p>
                    <p>020-XXX-XXX</p>



                    <div className="social">

                        <img src="../public/assets/social/ig.svg"></img>
                        <img src="../public/assets/social/fb.svg"></img>
                        <img src="../public/assets/social/threads.svg"></img>
                        <img src="../public/assets/social/x.svg"></img>


                    </div>


                </div>

                <div>

                    <div className="small_header" >
                        {/* check index.css, for global use, vertical rectangle.. */}
                        <div className="rectangle"></div>
                        <h3>Navigation:</h3>
                    </div>


                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/anime">Anime</Link></li>
                        <li><Link to="/manga">Manga</Link></li>
                        <li><Link to="/explore">Explore</Link></li>
                    </ul>



                </div>




            </div>




            <div className="second">

                <div>


                    <div className="small_header " style={{ marginBottom: '0.8em' }} >
                        {/* check index.css, for global use, vertical rectangle.. */}
                        <div className="rectangle_taller"></div>

                        <div>
                            <h3>Like what you see ?</h3>
                            <p>Consider signing up</p>
                        </div>




                    </div>

                    <button>SignUp</button>



                    <div className="small_header " style={{ marginBottom: '0.8em' }} >
                        {/* check index.css, for global use, vertical rectangle.. */}
                        <div className="rectangle_smaller"></div>

                        <p>Or if you already have an account</p>


                    </div>

                    <button>LogIn</button>



                </div>



            </div>


        </footer>

    </>

}
