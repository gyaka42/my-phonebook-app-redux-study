import React, { useState } from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button, { buttonClasses } from "@mui/material/Button";
import { blue, yellow, red } from "@mui/material/colors";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { MuiTelInput } from 'mui-tel-input';

import "../styles/add-user.css"


const theme = createTheme({
    palette: {
        primary: blue,
        secondary: red,
    },
});

const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phonenumber: "",
        address: "",
        email: "",
    });

    const { firstName, lastName, phonenumber, address, email } = state;

    function cancelClick() {
        navigate("/");
    }

    const handleInputChange = (event) => {
        if (event && event.target) {
            const { name, value } = event.target;
            setState({ ...state, [name]: value });
        }
    };

    const handlePhoneChange = (value) => {
        setState({ ...state, phonenumber: value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!firstName || !lastName || !phonenumber || !address || !email) {
            setError("Input fields cannot be empty !");
        } else {
            dispatch(addUser(state));
            navigate("/");
            setError("");
        }
    };
    

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        width: "100vh",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "10px",
                    }}
                >
                    <h2>Add User</h2>
                    {error && <h3 style={{ color: "red" }}>{error}</h3>}
                    <Box
                        sx={{
                            "& > :not(style)": { m: 1, width: "45ch" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                        variant="outlined"
                            id="outlined-basic"
                            label="First Name"
                            placeholder="Enter your name"
                            value={firstName}
                            name="firstName"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <br />
                        <TextField
                        variant="outlined"
                            id="outlined-basic"
                            label="Last Name"
                            placeholder="Enter your last name"
                            value={lastName}
                            name="lastName"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <br />
                        <MuiTelInput
                        defaultCountry="NL"
                        variant="outlined"
                            onChange={handlePhoneChange}
                            value={phonenumber}
                            name="phonenumber"
                            id="outlined-basic"
                            label="Phone Number"
                            placeholder="Enter your phone number"
                         />
                        <br />
                        <TextField
                        variant="outlined"
                            id="outlined-basic"
                            label="Address"
                            placeholder="Enter your address"
                            value={address}
                            name="address"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <br />
                        <TextField
                        variant="outlined"
                            id="outlined-basic"
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            name="email"
                            type="email"
                            onChange={handleInputChange}
                        />
                        <br />
                    </Box>
                    <div>
                        <Button
                            style={{ marginRight: 10 }}
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                        <Button onClick={cancelClick} color="secondary" variant="contained">
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </ThemeProvider>
    );
};

export default AddUser;
