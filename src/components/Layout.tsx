import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, CssBaseline } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CssBaseline />
            <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <Toolbar>
                    <LocalHospitalIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 'bold' }}>
                        Nearby Hospital Finder
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                <Box>
                    {children}
                </Box>
            </Container>
        </Box>
    );
};

export default Layout;
