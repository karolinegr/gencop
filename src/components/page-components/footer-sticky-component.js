
import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { Link, Typography, Container, Box, CssBaseline } from "@mui/material"

function Copyright() {
    return (
        <Typography variant="body2" color="#FFECD1">
            {'Copyright © '}
            <Link color="inherit" href="https://www.kakode.com.br/">
                KAKODE
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '90vh',
            }}
        >

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: "#001524",
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1" color="#FFECD1">
                        Feito com amor por Karoline Ribeiro ❤
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}