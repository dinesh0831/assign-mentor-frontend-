import axios from "axios";
import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import Menu from "./menubar" 
import {  TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper,Button } from "@mui/material"
function AssignStudent(){
    const [details,setDetail]=useState([])
    const getMentor = async () => {
        const { data } = await axios.get("  https://assig-mentor.herokuapp.com/students/unassigned")
        console.log(data)
        setDetail(data)

    }
    useEffect(() => {
        getMentor()
    }, [])
const params=useParams()
const selectStudent=async(name,id)=>{
   await axios.patch(`  https://assig-mentor.herokuapp.com/mentor/${params.id}`,{
        student:name
    })
    let detail=[...details]
    detail=detail.filter(rows=>name!==rows.name)
    setDetail(detail)
    const {data}=await axios.get(`  https://assig-mentor.herokuapp.com/mentor/${params.id}/studentList`)
    console.log(data)
    await axios.patch(`  https://assig-mentor.herokuapp.com/students/${id}`,{
        mentor:data.name,
        assigned:"yes"
    })

}



    return(
        <>
        <Menu/>
<TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
             
                <TableHead>
                    <TableRow>
                        
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Mobile No</TableCell>
                        <TableCell align="center">Select</TableCell>
                      
                    </TableRow>
                </TableHead>
                <TableBody>
                    {details.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell align="center">{row.name.toUpperCase()}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.mobileno}</TableCell>
                            <TableCell align="center"><Button onClick={()=>selectStudent(row.name,row._id)}>  select </Button></TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )

}
export default AssignStudent