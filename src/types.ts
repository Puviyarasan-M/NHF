export interface Doctor {
    name: string;
    specialization: string;
    availableFrom: string;
    availableTo: string;
}

export interface Hospital {
    id: string;
    name: string;
    category: 'GENERAL' | 'PEDIATRICS' | 'KIDNEY' | 'CARDIO' | 'ORTHO' | 'GYNEC';
    city: string;
    area: string;
    address: string;
    phone: string;
    doctors: Doctor[];
    openingHours: string;
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
}
