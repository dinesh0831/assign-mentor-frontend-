import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Menu from "./menubar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid,Box ,Typography, Card, CardMedia, CardContent, Paper, Table,TableCell, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
function MentorProfile() {
    const [detail, setDetail] = useState([])
    const [student,setStudent]=useState([])
    const params = useParams()
    const getMentor = async () => {
        const { data } = await axios.get(`  https://assig-mentor.herokuapp.com/mentor/${params.id}/studentList`)
        console.log(data)
        setDetail(data)
        setStudent(data.studentList)
        


    }
    useEffect(() => {
        getMentor()
    },)
 
    return (
        <>
        <Menu/>
        <Grid container sx={{ display: "flex", }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card sx={{ width: 250, height: "max-content" }}>

                    <CardMedia sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: 100 }} alt="green iguana">
                        <AccountCircleIcon sx={{ fontSize: 64 }} />
                    </CardMedia>

                    <CardContent sx={{ display: "block", marginLeft: 6, marginRight: 5 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {detail.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">{detail.email} </Typography>
                        <Typography variant="body2" color="text.secondary">{detail.mobileno} </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ marginLeft: 3, }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">Student List </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"><Typography sx={{fontSize:"24"}}>Student Name</Typography></TableCell>
                                    
                                   
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {student.map((row,index) => {
                                    return (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell >
                                            {row}
                                            </TableCell>

                                         

                                        </TableRow>)

                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Grid>
        </>
    )

}
export default MentorProfile
