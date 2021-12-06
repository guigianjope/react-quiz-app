import React from "react";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Main from '../pages/Main';
import Questions from '../pages/Questions';
import Result from '../pages/Result';

import { Container } from "@mui/material";
import { Box } from "@mui/system";

const AppRouter = () => {
  return (
    <Router>
        <Container maxWidth="sm" >
            <Box textAlign="center" mt={5} >
                <Routes>
                    <Route path="/" element={<Main />} exact/>
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/result" element={<Result />} /> 
                </Routes> 
            </Box>
        </Container>   
    </Router>
  )
};

export { AppRouter as default };