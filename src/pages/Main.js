import React, { Fragment } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system'
import SelectField from '../components/SelectField';
import SendIcon from '@mui/icons-material/Send';
import useAxios from '../hooks/useAxios';
import { useNavigate } from "react-router-dom";

const Main = () => {

    const { response, error, loading } = useAxios({ url: "/api_category.php" })
    const navigate = useNavigate()

    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        );
    }

    const difficultyOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"}
    ];

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
                Some Went Wrong!!
            </Typography>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('./questions')
    };

    return (
        <Fragment>
            <Typography variant="h2" component="h1" align="center">Quiz</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField options={response.trivia_categories} label="Category"/>
                <SelectField options={difficultyOptions} label="Difficulty"/>
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" endIcon={<SendIcon />} type="submit">Start</Button>
                </Box>
            </form>
        </Fragment>
    )
};

export default Main;
