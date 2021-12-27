
import image from "./asset/buit.jpg"
import Menu from "./menubar"
import { Box } from "@mui/material"

function Home() {
    return (
        <Box>
            <Menu  />
            <img alt="library" style={{top:0, height: "90vh", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", }} src={image} />
        </Box>
    )
}
export default Home