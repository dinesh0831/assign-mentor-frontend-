
import {Box,Typography} from "@mui/material"
import {Link } from "react-router-dom"
function Menu(){
    return(
        <Box sx={{ width: "100%", height: 70, display: "flex", alignItems: "center", justifyContent: "center", justifySelf: "center", overflow: "hidden" }}>
        <Box  component={Link} to={"/"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, '&:hover': { textDecoration: "underline" } }}><Typography  sx={{ fontSize: 24, fontWeight: "bold", }}>Home</Typography></Box>
        <Box  component={Link} to={"/create-mentor"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, '&:hover': { textDecoration: "underline" } }}><Typography  sx={{ fontSize: 24, fontWeight: "bold", }}>Create Mentor</Typography></Box>
        <Box  component={Link} to={"/create-student"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, '&:hover': { textDecoration: "underline" } }}><Typography  sx={{ fontSize: 24, fontWeight: "bold", }}>Create Student</Typography></Box>
        <Box  component={Link} to={"/MentorList"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, '&:hover': { textDecoration: "underline" } }}><Typography  sx={{ fontSize: 24, fontWeight: "bold", }}>Mentor List</Typography></Box>
        <Box  component={Link} to={"/studentList"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, '&:hover': { textDecoration: "underline" } }}><Typography  sx={{ fontSize: 24, fontWeight: "bold", }}>Student List</Typography></Box>
    </Box>

    )
}
export default Menu