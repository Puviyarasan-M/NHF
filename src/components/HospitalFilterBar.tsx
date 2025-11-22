import React from 'react';
import { Card, CardContent, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

interface HospitalFilterBarProps {
    category: string;
    onCategoryChange: (event: SelectChangeEvent) => void;
    location: string;
    onLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HospitalFilterBar: React.FC<HospitalFilterBarProps> = ({
    category,
    onCategoryChange,
    location,
    onLocationChange,
    name,
    onNameChange,
}) => {
    return (
        <Card sx={{ mb: 4 }}>
            <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                    Find hospitals near you
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <FormControl fullWidth>
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <Select
                                labelId="category-select-label"
                                id="category-select"
                                value={category}
                                label="Category"
                                onChange={onCategoryChange}
                            >
                                <MenuItem value="All">All Categories</MenuItem>
                                <MenuItem value="GENERAL">General</MenuItem>
                                <MenuItem value="PEDIATRICS">Pediatrics</MenuItem>
                                <MenuItem value="KIDNEY">Kidney Specialist</MenuItem>
                                <MenuItem value="CARDIO">Cardiology</MenuItem>
                                <MenuItem value="ORTHO">Orthopedics</MenuItem>
                                <MenuItem value="GYNEC">Gynecology</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Location"
                            placeholder="Enter city or area"
                            value={location}
                            onChange={onLocationChange}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <TextField
                            fullWidth
                            label="Hospital Name"
                            placeholder="Search by hospital name"
                            value={name}
                            onChange={onNameChange}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default HospitalFilterBar;
