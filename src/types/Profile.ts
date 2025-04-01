export interface Profile {
    id: number;
    name: string;
    photo: string;
    description: string;
    location: {
      lat: number;
      lng: number;
    };
  }
  