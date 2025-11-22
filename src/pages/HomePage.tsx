import React, { useState, useMemo } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import HospitalFilterBar from '../components/HospitalFilterBar';
import HospitalCard from '../components/HospitalCard';
import { hospitals } from '../data/hospitals';

const HomePage: React.FC = () => {
    const [category, setCategory] = useState('All');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const filteredHospitals = useMemo(() => {
        return hospitals.filter((hospital) => {
            const matchesCategory = category === 'All' || hospital.category === category;
            const matchesLocation =
                location === '' ||
                hospital.city.toLowerCase().includes(location.toLowerCase()) ||
                hospital.area.toLowerCase().includes(location.toLowerCase());
            const matchesName =
                name === '' || hospital.name.toLowerCase().includes(name.toLowerCase());

            return matchesCategory && matchesLocation && matchesName;
        });
    }, [category, location, name]);

    return (
        <Box>
            <HospitalFilterBar
                category={category}
                onCategoryChange={handleCategoryChange}
                location={location}
                onLocationChange={handleLocationChange}
                name={name}
                onNameChange={handleNameChange}
            />

            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                {filteredHospitals.length} hospitals found
            </Typography>

            {filteredHospitals.length === 0 ? (
                <Typography variant="body1" color="text.secondary" align="center" sx={{ mt: 4 }}>
                    No hospitals found. Try changing filters.
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {filteredHospitals.map((hospital) => (
                        <HospitalCard key={hospital.id} hospital={hospital} />
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default HomePage;
