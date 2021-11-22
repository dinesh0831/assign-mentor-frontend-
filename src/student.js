import axios from "axios";
import React from "react";
import Menu from "./menubar"
import image from "./asset/library.jpg"
import {  TextField, Box } from "@mui/material"
class Student extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            mobileno: ''
        }
    }
    createStudent=async()=>{
        const {name,email,mobileno}=this.state
        const response=await axios.post("  https://assig-mentor.herokuapp.com/students",{name,email,mobileno})
        console.log(response.data)
        this.setState({name:"",email:"",mobileno:''})
    }

    handleChange=({target:{name,value}})=> {
        this.setState({[name]:value})
      
       
    }

    handleSubmit=(e)=>{
        e.preventDefault()
         this.createStudent()
    }

    render() {
        return (
            <>
            <Menu />
            <Box component="form" onSubmit={this.handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },marginLeft:10,position:"absolute", bgcolor:"white",padding:3,borderRadius:3,marginTop:10
                }}
                noValidate
                autoComplete="off">
                    <h3> Create Student:</h3>
                

                    <TextField id="outlined-password-input" label="name" type='text' name="name" value={this.state.name} onChange={this.handleChange} /><br />

                    <TextField id="outlined-password-input" label="E-mail" type='text' name="email" value={this.state.email} onChange={this.handleChange} /><br />

                    <TextField id="outlined-password-input" label="Mobile No" type='text' name="mobileno" value={this.state.mobileno} onChange={this.handleChange} /><br />
                    <button>Create </button>
            </Box>
            <img  width="1350" height="650" alt="library" src={image}/>
        </>
        )
    }


}
export default Student