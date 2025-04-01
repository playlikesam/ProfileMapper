import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/Profiles";
import { Container, Typography, Card, CardContent, CardMedia } from "@mui/material";
import ProfileMap from "../components/ProfileMap";

const ProfileDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const profileId = id ? parseInt(id) : null;
  const profile = profiles.find((profile) => profile.id === profileId);

  if (!profile) {
    return <Typography variant="h6">Profile not found</Typography>;
  }

  return (
    <Container>
      <Card sx={{ display: "flex", marginTop: 4 }}>
        <CardMedia component="img" sx={{ width: 200 }} image={profile.photo} alt={profile.name} />
        <CardContent>
          <Typography variant="h5">{profile.name}</Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            {profile.description}
          </Typography>
        </CardContent>
      </Card>

      <ProfileMap latitude={profile.location.lat} longitude={profile.location.lng} />
    </Container>
  );
};

export default ProfileDetails;
