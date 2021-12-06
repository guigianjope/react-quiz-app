import React, { Fragment } from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Result = () => {

    const { score } = useSelector(state => state);
    
    return (
        <Fragment>
            <Typography variant="h2" component="h1" align="center" mb={3}>Quiz</Typography>
            <Box mt={30}>
                <Typography variant="h3" fontWeight="bold" mb={3}>Final Score: {score}</Typography>
                <Link to="/"><Button variant="outlined">Play again!</Button></Link>
            </Box>
        </Fragment>
    )
};

export default Result;
