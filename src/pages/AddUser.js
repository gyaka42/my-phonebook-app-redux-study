import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddUser = () => {
    return (
        <div style={{ width:"100px", marginLeft: "auto", marginRight: "auto", marginTop: "250px"}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-textarea"
                    label="First Name"
                    placeholder="Enter your name"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Last Name"
                    placeholder="Enter your last name"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Address"
                    placeholder="Enter your address"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    placeholder="Enter your email"
                    multiline
                />
            </Box>
        </div>
    )
}

export default AddUser