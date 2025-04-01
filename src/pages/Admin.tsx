import React, { useState } from "react";
import { profiles } from "../data/profiles";
import { TextField, Button, Container, Typography } from "@mui/material";

const Admin: React.FC = () => {
  const [newProfile, setNewProfile] = useState({
    id: profiles.length + 1,
    name: "",
    photo: "",
    description: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProfile.name || !newProfile.photo || !newProfile.description || !newProfile.lat || !newProfile.lng) {
      alert("Please fill all fields");
      return;
    }

    const newProfileData = {
      id: profiles.length + 1,
      name: newProfile.name,
      photo: newProfile.photo,
      description: newProfile.description,
      location: { lat: parseFloat(newProfile.lat), lng: parseFloat(newProfile.lng) },
    };

    profiles.push(newProfileData);
    alert("Profile added successfully!");
    setNewProfile({ id: profiles.length + 1, name: "", photo: "", description: "", lat: "", lng: "" });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
        Admin Panel - Add Profile
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
        <TextField label="Name" name="name" value={newProfile.name} onChange={handleChange} required />
        <TextField label="Photo URL" name="photo" value={newProfile.photo} onChange={handleChange} required />
        <TextField label="Description" name="description" value={newProfile.description} onChange={handleChange} required />
        <TextField label="Latitude" name="lat" value={newProfile.lat} onChange={handleChange} required />
        <TextField label="Longitude" name="lng" value={newProfile.lng} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary">
          Add Profile
        </Button>
      </form>
    </Container>
  );
};

export default Admin;
