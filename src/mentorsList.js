import axios from "axios";
import { useEffect,useState } from "react";
import {Link} from "react-router-dom"
import Menu from "./menubar"
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper,Button } from "@mui/material"



function MentorList() {
    const [detail,setDetail]=useState([])
    const getMentor = async () => {
        const { data } = await axios.get("  https://assig-mentor.herokuapp.com/mentor/getAll")
        console.log(data)
        setDetail(data)

    }
    useEffect(() => {
        getMentor()
    }, [])

    return (
        <>
         <Menu/>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
             
                <TableHead>
                    <TableRow>
                        
                        <TableCell align="center">name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Mobile No</TableCell>
                        <TableCell align="center">Assigning</TableCell>
                        <TableCell align="center">Profile</TableCell>
                      
                    </TableRow>
                </TableHead>
                <TableBody>
                    {detail.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.mobileno}</TableCell>
                            <TableCell align="center"><Button to={`/assign_student/${row._id}`} component={Link}>  Assign-student </Button></TableCell>
                            <TableCell align="center"><Button to={`/MentorProfile/${row._id}`} component={Link}>  Mentor-Profile </Button></TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

</>
    )
}
export default MentorList