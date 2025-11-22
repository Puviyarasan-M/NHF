import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Typography, Grid, Chip, Box, CardMedia } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';
import type { Hospital } from '../types';
import { useNavigate } from 'react-router-dom';

interface HospitalCardProps {
    hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/hospital/${hospital.id}`);
    };

    return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                    },
                    borderRadius: 2,
                    overflow: 'hidden'
                }}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80"
                    alt="Hospital Building"
                />
                <CardHeader
                    title={hospital.name}
                    subheader={
                        <Box sx={{ mt: 1 }}>
                            <Chip
                                label={hospital.category}
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{ mr: 1, mb: 0.5, fontWeight: 'bold' }}
                            />
                            <Typography variant="caption" color="text.secondary" display="block">
                                {hospital.city}, {hospital.area}
                            </Typography>
                        </Box>
                    }
                    titleTypographyProps={{ variant: 'h6', fontWeight: 'bold', color: 'primary.main' }}
                    sx={{ pb: 1 }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PlaceIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                        <Typography variant="body2" noWrap color="text.secondary">
                            {hospital.address}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <AccessTimeIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                            {hospital.openingHours}
                        </Typography>
                    </Box>
                    {hospital.doctors.length > 0 && (
                        <Box sx={{ mt: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                            <Typography variant="caption" color="text.secondary" fontWeight="bold">
                                Available Doctors:
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {hospital.doctors.slice(0, 2).map(d => d.name).join(', ')}
                                {hospital.doctors.length > 2 ? '...' : ''}
                            </Typography>
                        </Box>
                    )}
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button variant="contained" size="small" onClick={handleViewDetails} fullWidth sx={{ borderRadius: 2 }}>
                        View Details
                    </Button>
                    <Button
                        size="small"
                        endIcon={<LaunchIcon />}
                        href={hospital.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ ml: 1, borderRadius: 2 }}
                    >
                        Maps
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default HospitalCard;
