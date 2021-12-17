import axios from "axios";
import React from "react";
import Menu from "./menubar";
import image from "./asset/teacher.jpg"
import { TextField, Box } from "@mui/material"
class Mentor extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            mobileno: ''
        }
    }
    createMentor = async () => {
        const { name, email, mobileno } = this.state
        const response = await axios.post("    https://assig-mentor.herokuapp.com/mentor", { name, email, mobileno })
        console.log(response.data)
        this.setState({ name: "", email: "", mobileno: '' })
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createMentor()
        console.log(this.state)
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
                        <h3> Create Mentor:</h3>
                    

                        <TextField id="outlined-password-input" label="name" type='text' name="name" value={this.state.name} onChange={this.handleChange} /><br />

                        <TextField id="outlined-password-input" label="E-mail" type='text' name="email" value={this.state.email} onChange={this.handleChange} /><br />

                        <TextField id="outlined-password-input" label="Mobile No" type='text' name="mobileno" value={this.state.mobileno} onChange={this.handleChange} /><br />
                        <button>Create </button>
                </Box>
                <img  width="100%" height="auto" alt="library" src={image}/>
            </>
        )
    }


}
export default Mentor
