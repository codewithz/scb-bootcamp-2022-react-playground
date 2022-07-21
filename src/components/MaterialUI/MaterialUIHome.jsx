import React, { useState } from "react"

import { Stack } from "@mui/material"
import Button from "@mui/material/Button"
import { notifyInfo } from "../utilities/toastNotifications"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Checkbox from "@mui/material/Checkbox"



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export function MaterialUIHome() {

    const handleClick = () => {
        notifyInfo("Button is clicked")
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div>
            <Typography variant="h2" gutterBottom component="div">
                Material UI Home
            </Typography>

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained"
                    onClick={handleClick}>Click Me</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <hr />
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" component="div" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom component="div">
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom component="div">
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div">
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    overline text
                </Typography>
            </Box>
            <hr />
            <div>
                <Checkbox defaultChecked />
                <Checkbox />
                <Checkbox disabled />
                <Checkbox disabled checked />
            </div>
            <hr />

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}


