
import image from "./asset/buit.jpg"
import Menu from "./menubar"

function Home(){
    return(
        <>
        <Menu/>
        <img  width="100%" alt="library" height="auto" src={image}/>
        </>
    )
}
export default Home
