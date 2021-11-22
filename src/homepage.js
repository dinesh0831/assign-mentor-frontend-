
import image from "./asset/library.jpg"
import Menu from "./menubar"

function Home(){
    return(
        <>
        <Menu/>
        <img  width="1350" alt="library" height="650" src={image}/>
        </>
    )
}
export default Home