import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CardContent, Button, Grid, List, ListItem, ListItemText, Chip, Divider, Paper, Avatar } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import MapIcon from '@mui/icons-material/Map';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import { hospitals } from '../data/hospitals';

const HospitalDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const hospital = useMemo(() => {
        return hospitals.find((h) => h.id === id);
    }, [id]);

    if (!hospital) {
        return (
            <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h5" gutterBottom color="text.secondary">
                    Hospital not found
                </Typography>
                <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={() => navigate('/')} sx={{ mt: 2 }}>
                    Back to search
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ pb: 4 }}>
            <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')} sx={{ mb: 2, color: 'text.secondary' }}>
                Back to search
            </Button>

            <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 2 }}>
                <Box
                    sx={{
                        height: 250,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        p: 3,
                        pt: 8
                    }}>
                        <Typography variant="h3" component="h1" color="white" fontWeight="bold">
                            {hospital.name}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                            <Chip label={hospital.category} color="primary" sx={{ fontWeight: 'bold' }} />
                        </Box>
                    </Box>
                </Box>

                <CardContent sx={{ p: 3 }}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h5" gutterBottom fontWeight="bold" color="text.primary">
                                    About & Contact
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                    <PlaceIcon color="action" sx={{ mr: 1, mt: 0.5 }} />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {hospital.city}, {hospital.area}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {hospital.address}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <PhoneIcon color="action" sx={{ mr: 1 }} />
                                    <Typography variant="body1" component="a" href={`tel:${hospital.phone}`} sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
                                        {hospital.phone}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <AccessTimeIcon color="action" sx={{ mr: 1 }} />
                                    <Typography variant="body1">
                                        <strong>Opening Hours:</strong> {hospital.openingHours}
                                    </Typography>
                                </Box>

                                <Button
                                    variant="contained"
                                    startIcon={<MapIcon />}
                                    href={hospital.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="large"
                                >
                                    Open in Google Maps
                                </Button>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.50' }}>
                                <Typography variant="h6" gutterBottom fontWeight="bold">
                                    Doctors Available
                                </Typography>
                                <Divider sx={{ mb: 2 }} />
                                <List disablePadding>
                                    {hospital.doctors.map((doctor, index) => (
                                        <ListItem key={index} alignItems="flex-start" sx={{ px: 0 }}>
                                            <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                                                <PersonIcon />
                                            </Avatar>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="subtitle1" fontWeight="bold">
                                                        {doctor.name}
                                                    </Typography>
                                                }
                                                secondary={
                                                    <>
                                                        <Typography component="span" variant="body2" color="primary.main" fontWeight="medium">
                                                            {doctor.specialization}
                                                        </Typography>
                                                        <br />
                                                        <Typography component="span" variant="caption" color="text.secondary">
                                                            {doctor.availableFrom} - {doctor.availableTo}
                                                        </Typography>
                                                    </>
                                                }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
            </Paper>
        </Box>
    );
};

export default HospitalDetailPage;
