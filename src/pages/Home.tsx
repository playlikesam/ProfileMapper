import React from "react";
import ProfileCard from "../components/ProfileCard";
import { profiles } from "../data/Profiles";
import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
        Profile Mapper - Home
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {profiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <ProfileCard profile={profile} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
