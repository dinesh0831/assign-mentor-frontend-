
import image from "./asset/buit.jpg"
import Menu from "./menubar"

function Home(){
    return(
        <>
        <Menu/>
        <img  style={{height:"100vh",width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed",}} alt="library"  src={image}/>
        </>
    )
}
export default Home
