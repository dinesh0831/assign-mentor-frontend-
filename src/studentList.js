import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./menubar"
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from "@mui/material"



function StudentList() {
    const [detail, setDetail] = useState([])
    const getStudent = async () => {
        const { data } = await axios.get("  https://assig-mentor.herokuapp.com/students/allStudent")
        console.log(data)
        setDetail(data)

    }
    useEffect(() => {
        getStudent()
    }, [])

    return (
        <>
            <Menu/>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">

                        <TableHead>
                            <TableRow>

                                <TableCell align="left" sx={{fontWeight:"bold",fontSize:"22"}}>Name</TableCell>
                                <TableCell align="center" sx={{fontWeight:"bold",fontSize:"22"}}>Email</TableCell>
                                <TableCell align="center" sx={{fontWeight:"bold",fontSize:"22"}}>Mobile No</TableCell>
                                <TableCell align="center" sx={{fontWeight:"bold",fontSize:"22"}}>Mentor</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {detail.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell align="left">{row.name.toUpperCase()}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.mobileno}</TableCell>
                                    <TableCell align="center">{row.mentor}</TableCell>



                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>


            )
}
            export default StudentList