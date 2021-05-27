import React from 'react'
import LatestNews from './LatestNews'

//
import './home.scss'
import '../../static/styles/g-Styles.scss'

//imageImports
////NEWGAMES
import pkmnSnap from '../../static/images/newGames/pkmnSnap.jpeg'
import amiibo from '../../static/images/newGames/amiibo.jpeg'
import animalCrossing from '../../static/images/newGames/animalCrossing.jpeg'
import marioGolf from '../../static/images/newGames/marioGolf.jpeg'
import pacman from '../../static/images/newGames/pacman.jpeg'
import superMario3dWorld from '../../static/images/games/superMario/superMario3dWorld.jpg'

//Switch Bundles
import bundle1 from '../../static/images/store/normalConsoleSwitch.png'
import bundle2 from '../../static/images/store/greyComsoleSwitch.png'
import bundle3 from '../../static/images/store/animalCrossingBundle.png'
import bundle4 from '../../static/images/store/monsterHunter.png'

//eshop
import eshop from '../../static/images/svg/mainPageContent/eShop.svg'

function MainPage() {
    return (
     <article className="container">
    
        <section className="mainPageGrid">
        <LatestNews> </LatestNews>
        
            <div className=" newGames "> 
            <h1 className="h1">New Games</h1>
            <img className="scaleAnimation heroEdge" id="pkmnSnap" src={pkmnSnap} alt="Pokemon Snap!" />
            <img className="scaleAnimation heroEdge" id="amiibo" src={amiibo} alt="" />
            <img className="scaleAnimation heroEdge" id="animalCrossing" src={animalCrossing} alt="" />
            <img className="scaleAnimation heroEdge" id="marioGolf" src={marioGolf} alt="" />
            <img className="scaleAnimation heroEdge" id="pacman" src={pacman} alt="" />
            <img className="scaleAnimation heroEdge" id="superMario3dWorld" src={superMario3dWorld} alt="" />
            
            
            
             </div>


            <div className=" switchBundles">
            <h1 className="h1 ">Store Bundles</h1>

            <div className="bundle" id="bundle1" >
                <img className="bundle pointer scaleAnimation metalEdge" src={bundle1} alt="" />
                <div className="bundlesOverlay pointer">
                    <h1>Original Switch Bundle</h1>
                    <p>£299</p>
                </div>
            </div>

            <div className="bundle"  id="bundle2">
            <img className="bundle pointer scaleAnimation metalEdge" src={bundle2} alt="" />
                <div className="bundlesOverlay pointer">
                    <h1>Grey Switch Bundle</h1>
                    <p>£299</p>
                </div>
            </div>
            
            <div className="bundle" id="bundle3" >
            <img className="bundle pointer scaleAnimation metalEdge" src={bundle3} alt="" />
                <div className="bundlesOverlay pointer">
                    <h1>Animal Crossing Switch Bundle</h1>
                    <p>£320</p>
                </div>
            </div>

            <div className="bundle" id="bundle4" >
            <img className="bundle pointer scaleAnimation metalEdge" src={bundle4} alt="" />
                <div className="bundlesOverlay pointer">
                    <h1>Monster Hunter Switch Bundle</h1>
                    <p>£320</p>
                </div>
            </div>

            </div>
            


            <div className="registerEshop">
                <img src={eshop} alt="" />
            </div>
            <div className="moreGames">moreGames</div>
        </section>
     </article>
    )
}

export default MainPage
